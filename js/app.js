import { translations } from './i18n/translations.js';
import { techData } from './data/tech-data.js';
import { projectIcons } from './data/project-icons.js';


// ==================== НАВИГАЦИЯ И МЕНЮ ====================
const hamburger = document.getElementById('hamburger');
const menuOverlay = document.getElementById('menuOverlay');
const menuBackdrop = document.getElementById('menuBackdrop');

function openMenu() {
    hamburger.classList.add('active');
    menuOverlay.classList.add('active');
    menuBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMenu() {
    hamburger.classList.remove('active');
    menuOverlay.classList.remove('active');
    menuBackdrop.classList.remove('active');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', () => {
    if (menuOverlay.classList.contains('active')) {
        closeMenu();
    } else {
        openMenu();
    }
});

// Закрытие по клику на ссылку
document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', () => {
        closeMenu();
    });
});

// Закрытие по клику на затемнённый фон
menuBackdrop.addEventListener('click', () => {
    closeMenu();
});

// Закрытие по клавише Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuOverlay.classList.contains('active')) {
        closeMenu();
    }
});

// ==================== ПРИМЕНЕНИЕ ПЕРЕВОДОВ (без перерендера карточек) ====================
function applyTranslations(lang) {
    if (!translations[lang]) return;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (key === 'contacts_text') {
                el.innerHTML = translations[lang][key];
            } else {
                el.textContent = translations[lang][key];
            }
        }
    });
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
}

// ==================== ФУНКЦИЯ ПЕРЕКЛЮЧЕНИЯ ЯЗЫКА ====================
function updateLanguage(lang) {
    if (!translations[lang]) return;
    
    // Обновляем текстовые элементы
    applyTranslations(lang);
    
    // Обновляем карточки технологий без анимации (чтобы не было прыжков)
    renderTechCards(lang, false);
    
    // Обновляем карточки проектов без анимации
    renderProjectCards(lang, false);
    
    // Обновляем тексты для typewriter эффекта (чтобы печатался правильный язык)
    typewriterTexts.clear();
    saveTypewriterTexts();
    
    // Сохраняем язык
    localStorage.setItem('selectedLang', lang);
    
    // Обновляем ScrollTrigger
    if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
}

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        updateLanguage(lang);
    });
});

// ==================== ПОДГОТОВКА ЭФФЕКТОВ ====================

// Создание частиц для секции Banking/Projects
function createParticles(containerId, count = 20) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Очищаем контейнер перед созданием
    container.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        // Ограничиваем позиции (85% чтобы частицы не уходили за края)
        particle.style.left = (Math.random() * 85 + 7.5) + '%';
        particle.style.top = (Math.random() * 85 + 7.5) + '%';
        particle.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(particle);
        
        // GSAP анимация пульсации - ярче и заметнее
        gsap.to(particle, {
            scale: Math.random() * 0.4 + 0.8,
            opacity: Math.random() * 0.3 + 0.7,
            duration: Math.random() * 1.5 + 1,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }
}

// Хранилище мозаичных элементов для анимации
const mosaicElements = new Map();

// Создание мозаики для секций Security и Contacts
function createMosaic(containerId, count = 15) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Очищаем контейнер перед созданием
    container.innerHTML = '';
    const pieces = [];
    
    for (let i = 0; i < count; i++) {
        const piece = document.createElement('div');
        piece.className = 'mosaic-piece';
        // Ограничиваем позиции (90% чтобы 50px элемент не выходил за границу)
        const finalX = Math.random() * 90 + 5;
        const finalY = Math.random() * 90 + 5;
        const rotation = Math.random() * 360;
        
        piece.style.left = finalX + '%';
        piece.style.top = finalY + '%';
        piece.style.transform = `rotate(${rotation}deg) scale(0)`;
        piece.style.opacity = '0';
        
        container.appendChild(piece);
        pieces.push({
            element: piece,
            finalX: finalX,
            finalY: finalY,
            rotation: rotation
        });
    }
    
    mosaicElements.set(containerId, pieces);
}

// ==================== РЕНДЕРИНГ КАРТОЧЕК ТЕХНОЛОГИЙ ====================
function renderTechCards(lang = 'ru', animate = true) {
    const techGrid = document.querySelector('.tech-grid');
    if (!techGrid) {
        console.error('Элемент .tech-grid не найден!');
        return;
    }
    
    const data = techData[lang] || techData['ru'];
    const existingCards = techGrid.querySelectorAll('.tech-card');
    
    // Если карточки уже существуют и не нужна анимация — просто обновляем текст
    if (existingCards.length === data.length && !animate) {
        existingCards.forEach((card, index) => {
            const item = data[index];
            const iconEl = card.querySelector('.tech-icon i');
            const titleEl = card.querySelector('h3');
            const descEl = card.querySelector('p');
            
            if (iconEl) iconEl.className = item.icon;
            if (titleEl) titleEl.textContent = item.title;
            if (descEl) descEl.textContent = item.desc;
        });
        return;
    }
    
    // Иначе пересоздаём карточки (первый рендер или изменение количества)
    techGrid.innerHTML = '';
    
    data.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'tech-card';
        card.innerHTML = `
            <div class="tech-icon"><i class="${item.icon}"></i></div>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
        `;
        techGrid.appendChild(card);
        
        // Анимация появления карточек только при первом рендере
        if (animate) {
            gsap.to(card, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: index * 0.1,
                ease: 'power2.out'
            });
        } else {
            // Без анимации — сразу видимые
            card.style.opacity = 1;
            card.style.transform = 'translateY(0)';
        }
    });
}

// ==================== РЕНДЕРИНГ КАРТОЧЕК ПРОЕКТОВ ====================
function renderProjectCards(lang = 'ru', animate = true) {
    const projectsGrid = document.getElementById('projectsGrid');
    if (!projectsGrid) return;
    
    const data = projectsData[lang] || projectsData['ru'];
    const existingCards = projectsGrid.querySelectorAll('.project-card');
    
    // Локализованные заголовки для баблов
    const bubbleLabels = {
        ru: { tech: 'Технологии', func: 'Функционал', int: 'Интеграции', plat: 'Платформы' },
        en: { tech: 'Technologies', func: 'Functionality', int: 'Integrations', plat: 'Platforms' },
        cn: { tech: '技术', func: '功能', int: '集成', plat: '平台' },
        es: { tech: 'Tecnologías', func: 'Funcionalidad', int: 'Integraciones', plat: 'Plataformas' },
        jp: { tech: '技術', func: '機能', int: '統合', plat: 'プラットフォーム' }
    };
    const labels = bubbleLabels[lang] || bubbleLabels['ru'];
    
    // Если карточки уже существуют и не нужна анимация — просто обновляем текст
    if (existingCards.length === data.length && !animate) {
        existingCards.forEach((card, index) => {
            const item = data[index];
            const titleEl = card.querySelector('h3');
            const shortEl = card.querySelector('p');
            const bubbleTitleEl = card.querySelector('.project-bubble h4');
            const bubbleLabelEls = card.querySelectorAll('.project-bubble-section h5');
            const bubbleSections = card.querySelectorAll('.project-bubble-section p');
            
            if (titleEl) titleEl.textContent = item.title;
            if (shortEl) shortEl.textContent = item.short;
            if (bubbleTitleEl) bubbleTitleEl.textContent = item.title;
            if (bubbleLabelEls[0]) bubbleLabelEls[0].textContent = labels.tech;
            if (bubbleLabelEls[1]) bubbleLabelEls[1].textContent = labels.func;
            if (bubbleLabelEls[2]) bubbleLabelEls[2].textContent = labels.int;
            if (bubbleLabelEls[3]) bubbleLabelEls[3].textContent = labels.plat;
            if (bubbleSections[0]) bubbleSections[0].textContent = item.tech;
            if (bubbleSections[1]) bubbleSections[1].textContent = item.func;
            if (bubbleSections[2]) bubbleSections[2].textContent = item.int;
            if (bubbleSections[3]) bubbleSections[3].textContent = item.plat;
        });
        return;
    }
    
    // Иначе пересоздаём карточки
    projectsGrid.innerHTML = '';
    
    data.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        card.innerHTML = `
            <div class="project-icon">${projectIcons[item.icon] || projectIcons.store}</div>
            <h3>${item.title}</h3>
            <p>${item.short}</p>
            <div class="project-bubble">
                <h4>${item.title}</h4>
                <div class="project-bubble-section">
                    <h5>${labels.tech}</h5>
                    <p>${item.tech}</p>
                </div>
                <div class="project-bubble-section">
                    <h5>${labels.func}</h5>
                    <p>${item.func}</p>
                </div>
                <div class="project-bubble-section">
                    <h5>${labels.int}</h5>
                    <p>${item.int}</p>
                </div>
                <div class="project-bubble-section">
                    <h5>${labels.plat}</h5>
                    <p>${item.plat}</p>
                </div>
            </div>
        `;
        projectsGrid.appendChild(card);
        
        // Анимация появления карточек - только transform, без opacity
        if (animate) {
            gsap.from(card, {
                y: 20,
                scale: 0.98,
                duration: 0.4,
                delay: index * 0.03,
                ease: 'power2.out'
            });
        }
    });
}

// ==================== GSAP и ScrollTrigger ====================

// Регистрируем плагины сразу (GSAP уже загружен из head)
if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

// Всё выполняем после загрузки DOM
document.addEventListener('DOMContentLoaded', () => {

    // Обработчик для security-toggle-btn (заменяет inline onclick)
    document.querySelectorAll('.security-toggle-btn[data-toggle]').forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active');
            this.nextElementSibling.classList.toggle('show');
        });
    });

    // Применяем сохранённый язык
    const savedLang = localStorage.getItem('selectedLang') || 'ru';
    
    // Сначала применяем переводы текста (без перерендера карточек)
    applyTranslations(savedLang);
    
    // Сохраняем тексты для typewriter эффекта (после применения переводов!)
    saveTypewriterTexts();
    
    // Рендерим карточки с текущим языком
    renderTechCards(savedLang);
    
    // Рендерим карточки проектов
    renderProjectCards(savedLang);
    
    // Создаём эффекты (адаптивно — меньше на мобильных)
    const isMobile = window.innerWidth < 768;
    createParticles('particlesBanking', isMobile ? 12 : 25);
    createParticles('particlesProjects', isMobile ? 15 : 30);
    createMosaic('mosaicSecurity', isMobile ? 10 : 20);
    createMosaic('mosaicContacts', isMobile ? 8 : 15);
    
    // Инициализируем эффект Матрицы (только на десктопе)
    if (!isMobile) {
        initMatrixEffect();
    }
    
    // Инициализируем GSAP анимации (после сохранения текстов!)
    initSectionAnimations();
    
    // Создаём эффект битых пикселей для Hero и Footer
    createDeadPixels('deadPixelsHero', 25);
    createDeadPixels('deadPixelsFooter', 35);
    
    // Генерируем QR-код
    generateQRCode();
    
    // Восстанавливаем позицию секции
    restorePosition();
});

// Хранилище текстов для typewriter эффекта
const typewriterTexts = new Map();

// Сохраняем тексты для typewriter секций
function saveTypewriterTexts() {
    document.querySelectorAll('.section[data-effect="typewriter"]').forEach(section => {
        const content = section.querySelector('.section-content');
        if (!content) return;
        
        const texts = [];
        content.querySelectorAll('h2, p').forEach(el => {
            const key = el.getAttribute('data-i18n');
            // Пропускаем элементы без data-i18n (например, пустые параграфы)
            if (key) {
                texts.push({
                    element: el,
                    key: key,
                    defaultText: el.textContent
                });
            }
        });
        typewriterTexts.set(section.id, texts);
    });
}

// Функция создания GSAP анимаций для секций
function initSectionAnimations() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const effect = section.dataset.effect;
        const content = section.querySelector('.section-content');
        
        if (!content) return;
        
        // Определяем точку старта анимации в зависимости от эффекта
        let startTrigger = window.innerWidth < 768 ? 'top 60%' : 'top 50%';
        // Для Projects и Technologies — позже, чтобы видеть всю сборку
        if (effect === 'projectsAssembly' || effect === 'slideDark') {
            startTrigger = window.innerWidth < 768 ? 'top 40%' : 'top 35%';
        }
        
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: startTrigger,
                end: 'bottom 30%',
                toggleActions: 'play none none reverse'
            }
        });
        
        switch(effect) {
            case 'typewriter':
                // Печатающийся текст (typewriter effect)
                const savedTexts = typewriterTexts.get(section.id) || [];
                // Используем текущий язык из глобальной переменной
                const typeLang = typeof currentLang !== 'undefined' ? currentLang : (localStorage.getItem('selectedLang') || 'ru');
                
                savedTexts.forEach((item, index) => {
                    const el = item.element;
                    // Берём текст из переводов или дефолтный
                    const textToType = translations[typeLang]?.[item.key] || item.defaultText;
                    
                    el.textContent = '';
                    el.style.opacity = 1;
                    
                    // Анимация печати текста
                    tl.to(el, {
                        text: textToType,
                        duration: textToType.length * 0.05, // ~50ms на символ
                        ease: 'none'
                    }, index * 0.5); // Задержка между элементами
                });
                break;
                
            case 'slideDark':
                // Сборка карточек технологий с разных сторон (аналогично Projects)
                const techCards = content.querySelectorAll('.tech-card');
                
                // Сначала скрываем все карточки
                gsap.set(techCards, {
                    opacity: 0,
                    scale: 0.5
                });
                
                // Анимируем каждую карточку с разных сторон
                techCards.forEach((card, i) => {
                    // Определяем сторону вылета в зависимости от позиции
                    const row = Math.floor(i / 4);
                    const col = i % 4;
                    
                    let fromX = 0, fromY = 0;
                    
                    // Верхние ряды - сверху, нижние - снизу
                    if (row < 2) {
                        fromY = -200 - Math.random() * 200;
                    } else {
                        fromY = 200 + Math.random() * 200;
                    }
                    
                    // Левые колонки - слева, правые - справа
                    if (col < 2) {
                        fromX = -200 - Math.random() * 200;
                    } else {
                        fromX = 200 + Math.random() * 200;
                    }
                    
                    // Добавляем случайности
                    fromX += (Math.random() - 0.5) * 200;
                    fromY += (Math.random() - 0.5) * 200;
                    
                    gsap.fromTo(card, {
                        x: fromX,
                        y: fromY,
                        opacity: 0,
                        scale: 0.3,
                        rotation: (Math.random() - 0.5) * 30
                    }, {
                        x: 0,
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        rotation: 0,
                        duration: 1.2 + Math.random() * 0.4,
                        delay: i * 0.08,
                        ease: 'power3.out'
                    });
                });
                
                // Анимация заголовка
                tl.from(content.querySelector('h2'), {
                    opacity: 0,
                    y: -20,
                    duration: 0.6,
                    ease: 'power2.out'
                }, 0);
                break;
                
            case 'mosaic':
                // Мозаика собирается и пульсирует
                const sectionId = section.id;
                const mosaicContainer = document.getElementById(sectionId === 'security' ? 'mosaicSecurity' : 'mosaicContacts');
                const pieces = mosaicElements.get(sectionId === 'security' ? 'mosaicSecurity' : 'mosaicContacts') || [];
                
                // Анимация сборки мозаики
                pieces.forEach((piece, i) => {
                    const el = piece.element;
                    // Стартовая позиция — из-за краев экрана
                    const startX = (Math.random() - 0.5) * 200; // -100% до +100%
                    const startY = (Math.random() - 0.5) * 200;
                    
                    gsap.set(el, {
                        x: startX + '%',
                        y: startY + '%',
                        scale: 0,
                        opacity: 0,
                        rotation: Math.random() * 720 - 360
                    });
                    
                    // Анимация сборки
                    tl.to(el, {
                        x: '0%',
                        y: '0%',
                        scale: 1,
                        opacity: 0.2,
                        rotation: piece.rotation,
                        duration: 0.6,
                        ease: 'power2.out'
                    }, i * 0.03);
                    
                    // Пульсация после сборки
                    tl.to(el, {
                        opacity: 0.4,
                        scale: 1.1,
                        duration: 1 + Math.random(),
                        repeat: -1,
                        yoyo: true,
                        ease: 'sine.inOut'
                    }, '>+0.5');
                });
                
                // Контент появляется сквозь мозаику
                tl.from(content, {
                    opacity: 0,
                    scale: 0.8,
                    filter: 'blur(10px)',
                    duration: 1,
                    ease: 'power2.out'
                }, 0.3);
                break;
                
            case 'particles':
                // Частицы пульсируют
                tl.from(content, {
                    opacity: 0,
                    y: 30,
                    duration: 0.8,
                    ease: 'power2.out'
                });
                break;
                
            case 'diagRotate':
                // Диагональный сдвиг + вращение
                tl.from(content, {
                    opacity: 0,
                    x: -30,
                    y: 30,
                    rotation: -5,
                    duration: 0.8,
                    ease: 'power2.out'
                });
                break;
                
            case 'projectsAssembly':
                // Сборка карточек проектов с разных сторон
                const projectCards = content.querySelectorAll('.project-card');
                
                // Сначала скрываем все карточки
                gsap.set(projectCards, {
                    opacity: 0,
                    scale: 0.5
                });
                
                // Анимируем каждую карточку с разных сторон
                projectCards.forEach((card, i) => {
                    // Определяем сторону вылета в зависимости от позиции
                    const row = Math.floor(i / 4);
                    const col = i % 4;
                    
                    let fromX = 0, fromY = 0;
                    
                    // Верхние ряды - сверху, нижние - снизу
                    if (row < 2) {
                        fromY = -200 - Math.random() * 200;
                    } else {
                        fromY = 200 + Math.random() * 200;
                    }
                    
                    // Левые колонки - слева, правые - справа
                    if (col < 2) {
                        fromX = -200 - Math.random() * 200;
                    } else {
                        fromX = 200 + Math.random() * 200;
                    }
                    
                    // Добавляем случайности
                    fromX += (Math.random() - 0.5) * 200;
                    fromY += (Math.random() - 0.5) * 200;
                    
                    gsap.fromTo(card, {
                        x: fromX,
                        y: fromY,
                        opacity: 0,
                        scale: 0.3,
                        rotation: (Math.random() - 0.5) * 30
                    }, {
                        x: 0,
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        rotation: 0,
                        duration: 1.2 + Math.random() * 0.4,
                        delay: i * 0.08,
                        ease: 'power3.out'
                    });
                });
                
                // Анимация заголовка
                tl.from(content.querySelector('h2'), {
                    opacity: 0,
                    y: -20,
                    duration: 0.6,
                    ease: 'power2.out'
                }, 0);
                
                tl.from(content.querySelector('p'), {
                    opacity: 0,
                    y: -10,
                    duration: 0.6,
                    ease: 'power2.out'
                }, 0.2);
                break;
                
            default:
                // Стандартная анимация
                tl.from(content, {
                    opacity: 0,
                    y: 30,
                    duration: 0.6,
                    ease: 'power2.out'
                });
        }
    });
}

// ==================== НАВИГАЦИЯ СТРЕЛКАМИ И СОХРАНЕНИЕ ПОЗИЦИИ ====================

const sections = document.querySelectorAll('.section');
const navUp = document.getElementById('navUp');
const navDown = document.getElementById('navDown');
let currentSectionIndex = 0;

// Получаем индекс текущей секции
function getCurrentSectionIndex() {
    const scrollPos = window.scrollY + window.innerHeight / 2;
    let index = 0;
    sections.forEach((section, i) => {
        if (scrollPos >= section.offsetTop) {
            index = i;
        }
    });
    return index;
}

// Прокрутка к секции
function scrollToSection(index) {
    if (index < 0) index = 0;
    if (index >= sections.length) index = sections.length - 1;
    
    currentSectionIndex = index;
    sections[index].scrollIntoView({ behavior: 'smooth' });
    updateNavButtons();
    
    // Сохраняем позицию
    localStorage.setItem('currentSection', index);
}

// Обновление состояния кнопок
function updateNavButtons() {
    if (navUp) navUp.disabled = currentSectionIndex === 0;
    if (navDown) navDown.disabled = currentSectionIndex === sections.length - 1;
}

// Клики по кнопкам
if (navUp) {
    navUp.addEventListener('click', () => scrollToSection(currentSectionIndex - 1));
}
if (navDown) {
    navDown.addEventListener('click', () => scrollToSection(currentSectionIndex + 1));
}

// Клавиатурная навигация
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        e.preventDefault();
        scrollToSection(currentSectionIndex - 1);
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        scrollToSection(currentSectionIndex + 1);
    }
});

// Отслеживание скролла
window.addEventListener('scroll', () => {
    currentSectionIndex = getCurrentSectionIndex();
    updateNavButtons();
}, { passive: true });

// Восстановление позиции при загрузке
function restorePosition() {
    const savedIndex = localStorage.getItem('currentSection');
    if (savedIndex !== null) {
        const index = parseInt(savedIndex, 10);
        if (index >= 0 && index < sections.length) {
            // Небольшая задержка для корректной прокрутки
            setTimeout(() => {
                sections[index].scrollIntoView({ behavior: 'auto' });
                currentSectionIndex = index;
                updateNavButtons();
            }, 100);
        }
    }
}

// Плавная прокрутка по якорям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            // Находим индекс секции
            sections.forEach((section, index) => {
                if (section.id === targetId.substring(1)) {
                    scrollToSection(index);
                }
            });
        }
    });
});

// ==================== ЭФФЕКТ МАТРИЦЫ ====================
// Символы для разных языков
const matrixChars = {
    ru: '0123456789АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ',
    en: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    cn: '0123456789的一是在不了有和人这中大为上个国我以要他时来用们生到作地于出就分对成会可主发年动同工也能下过子说产种面而方后多定行学法所民得经十三之进着等部度家电力里如水化高自二理起小物现实加量都两体制机当使点从业本去把性好应开它合还因由其些然前外天政四日那社义事平形相全表间样与关各重新线内数正心反你明看原又么利比或但质气第向道命此变条只没结解问意建月公无系军很情者最立代想已通并提直题党程展五果料象员革位入常文总次品式活设及管特件长求老头基资边流路级少图山统接知较将组见计别她手角期根论运农指几九区强放决西被干做必战先回则任取完举色或',
    jp: '0123456789あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン',
    kr: '0123456789ㄱㄴㄷㄹㅁㅂㅅㅇㅈㅊㅋㅌㅍㅎㅏㅑㅓㅕㅗㅛㅜㅠㅡㅣ가나다라마바사아자차카타파하'
};

let matrixInterval = null;
let currentMatrixLang = 'ru';

function initMatrixEffect() {
    const canvas = document.getElementById('matrixCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Устанавливаем размер canvas
    function resizeCanvas() {
        const section = document.getElementById('tech');
        if (section) {
            canvas.width = section.offsetWidth;
            canvas.height = section.offsetHeight;
        }
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Параметры эффекта
    const fontSize = 28;
    const columnSpacing = fontSize * 0.7; // Уже по горизонтали
    const columns = Math.floor(canvas.width / columnSpacing);
    const drops = [];
    
    // Инициализация позиций капель
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100; // Разная начальная позиция
    }
    
    // Получаем текущий язык
    function getCurrentLang() {
        return localStorage.getItem('selectedLang') || 'ru';
    }
    
    // Рисуем эффект
    let frameCount = 0;
    function draw() {
        frameCount++;
        
        // Полупрозрачный чёрный для эффекта затухания
        ctx.fillStyle = 'rgba(10, 10, 12, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Получаем символы для текущего языка
        const lang = getCurrentLang();
        if (lang !== currentMatrixLang) {
            currentMatrixLang = lang;
        }
        const chars = matrixChars[lang] || matrixChars['ru'];
        
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            // Случайный символ
            const char = chars[Math.floor(Math.random() * chars.length)];
            
            // Рисуем символ
            const x = i * columnSpacing;
            const y = drops[i] * fontSize * 2; // Вертикальное расстояние = 2x размер символа
            
            // Базовая прозрачность с градиентом по высоте
            const baseOpacity = Math.max(0.1, 1 - (y / canvas.height));
            
            // Каждый 10-й символ в 2 раза ярче
            const isBright = (i + frameCount) % 10 === 0;
            const opacity = isBright ? Math.min(1, baseOpacity * 0.8) : baseOpacity * 0.4;
            
            ctx.fillStyle = `rgba(201, 124, 93, ${opacity})`;
            
            ctx.fillText(char, x, y);
            
            // Перемещаем каплю вниз (медленнее)
            drops[i] += 0.5;
            
            // Если капля вышла за экран — сбрасываем
            if (y > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
        }
    }
    
    // Запускаем анимацию (медленнее)
    matrixInterval = setInterval(draw, 80);
    
    // Останавливаем когда секция не видна (оптимизация)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!matrixInterval) {
                    matrixInterval = setInterval(draw, 80);
                }
            } else {
                if (matrixInterval) {
                    clearInterval(matrixInterval);
                    matrixInterval = null;
                }
            }
        });
    }, { threshold: 0.1 });
    
    observer.observe(document.getElementById('tech'));
}

// ==================== ЭФФЕКТ БИТЫХ ПИКСЕЛЕЙ ====================
function createDeadPixels(containerId, count = 30) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // Очищаем контейнер
    container.innerHTML = '';
    
    for (let i = 0; i < count; i++) {
        const pixel = document.createElement('div');
        pixel.className = 'dead-pixel';
        
        // Случайная позиция
        pixel.style.left = Math.random() * 100 + '%';
        pixel.style.top = Math.random() * 100 + '%';
        
        // Случайная задержка анимации (0-4s)
        pixel.style.animationDelay = Math.random() * 4 + 's';
        
        // Случайная длительность (3-6s)
        pixel.style.animationDuration = (3 + Math.random() * 3) + 's';
        
        container.appendChild(pixel);
    }
}

// ==================== ГЕНЕРАЦИЯ QR-КОДА ====================
function generateQRCode() {
    const canvas = document.getElementById('qrCanvas');
    if (!canvas || typeof QRCode === 'undefined') return;
    
    const size = 156;
    canvas.width = size;
    canvas.height = size;
    
    // URL для QR-кода
    const url = 'https://aotochka.ru';
    
    // Создаём временный div для генерации QR-кода
    const tempDiv = document.createElement('div');
    document.body.appendChild(tempDiv);
    
    // Генерируем QR-код с помощью библиотеки
    const qr = new QRCode(tempDiv, {
        text: url,
        width: size,
        height: size,
        colorDark: '#0F0F12',
        colorLight: '#FFFFFF',
        correctLevel: QRCode.CorrectLevel.H // Высокий уровень коррекции для логотипа
    });
    
    // Ждём генерации и копируем на наш canvas
    setTimeout(() => {
        const qrCanvas = tempDiv.querySelector('canvas');
        if (qrCanvas) {
            const ctx = canvas.getContext('2d');
            
            // Очищаем canvas
            ctx.clearRect(0, 0, size, size);
            
            // Рисуем QR-код без искажений (прямые углы)
            ctx.drawImage(qrCanvas, 0, 0);
        }
        
        // Удаляем временный div
        document.body.removeChild(tempDiv);
    }, 100);
}
