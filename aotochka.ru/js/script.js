// Функция для переключения языка
async function setLanguage(lang) {
    try {
        const translations = await fetch(`../locales/${lang}.json`);
        const translationData = await translations.json();
        
        // Обновляем текстовые элементы
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translationData[key]) {
                element.textContent = translationData[key];
            }
        });
        
        // Обновляем placeholder'ы
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translationData[key]) {
                element.placeholder = translationData[key];
            }
        });

        // Обновляем язык документа
        document.documentElement.lang = lang;

        // Сохраняем выбранный язык в localStorage
        localStorage.setItem('selectedLanguage', lang);
    } catch (error) {
        console.error('Ошибка загрузки перевода:', error);
    }
}

// Функция переключения темы
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const isLightTheme = document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
}

// Восстановление сохраненной темы
function restoreTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    } else {
        document.body.classList.remove('light-theme');
    }
}

// Восстановление сохраненного языка
function restoreLanguage() {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        setLanguage(savedLanguage);
    } else {
        setLanguage('ru'); // По умолчанию русский
    }
}

// Управление боковым меню
function setupMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        
        if (!document.body.contains(overlay)) {
            document.body.appendChild(overlay);
        }
    });

    overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
    });

    // Добавляем возможность сворачивать/разворачивать меню на десктопе
    const desktopCollapseBtn = document.createElement('div');
    desktopCollapseBtn.className = 'desktop-collapse-btn';
    desktopCollapseBtn.innerHTML = '◀';
    desktopCollapseBtn.style.position = 'absolute';
    desktopCollapseBtn.style.right = '10px';
    desktopCollapseBtn.style.top = '50%';
    desktopCollapseBtn.style.transform = 'translateY(-50%)';
    desktopCollapseBtn.style.cursor = 'pointer';
    desktopCollapseBtn.style.color = 'var(--text-color)';
    desktopCollapseBtn.style.fontSize = '12px';
    desktopCollapseBtn.style.zIndex = '1001';
    
    desktopCollapseBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        desktopCollapseBtn.textContent = sidebar.classList.contains('collapsed') ? '▶' : '◀';
    });
    
    if (window.innerWidth > 768) {
        if (!document.body.contains(desktopCollapseBtn)) {
            document.body.appendChild(desktopCollapseBtn);
        }
    }
}

// Плавная прокрутка и активация пунктов меню
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Удаляем активный класс у всех ссылок
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                
                // Добавляем активный класс к текущей ссылке
                this.classList.add('active');
                
                // Прокручиваем к секции
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // На мобильных устройствах закрываем меню после выбора
                if (window.innerWidth <= 768) {
                    document.querySelector('.sidebar').classList.remove('active');
                    document.querySelector('.overlay').classList.remove('active');
                }
            }
        });
    });
    
    // Отслеживание прокрутки для активации пунктов меню
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('.content-section');
        const scrollPos = window.scrollY + 200;
        
        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.id;
            
            if (scrollPos >= top && scrollPos <= bottom) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Обработка формы
function setupForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const lang = localStorage.getItem('selectedLanguage') || 'ru';
            const translations = await fetch(`../locales/${lang}.json`).then(res => res.json());
            
            // Здесь можно добавить отправку данных формы
            alert(translations.form_submitted || 'Сообщение отправлено!');
            
            form.reset();
        });
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    restoreTheme();
    restoreLanguage();
    setupMenu();
    setupSmoothScroll();
    setupForm();
    
    // Обработчики переключения языка
    document.querySelectorAll('.lang-switch').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = link.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
    
    // Обработчик переключения темы
    document.getElementById('themeToggle').addEventListener('click', (e) => {
        e.preventDefault();
        toggleTheme();
    });
});