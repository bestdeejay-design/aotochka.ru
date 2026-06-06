export const techData = {
    ru: [
        { icon: 'fas fa-server', title: 'Облачная инфраструктура', desc: 'Масштабируемые решения на базе Kubernetes и Docker' },
        { icon: 'fas fa-shield-alt', title: 'Кибербезопасность', desc: 'Защита данных и соответствие стандартам PCI DSS' },
        { icon: 'fas fa-mobile-alt', title: 'Мобильные приложения', desc: 'iOS и Android разработка с нативным UX' },
        { icon: 'fas fa-database', title: 'Big Data', desc: 'Аналитика и обработка больших данных в реальном времени' },
        { icon: 'fas fa-credit-card', title: 'Платёжные системы', desc: 'Интеграция с банками и платёжными провайдерами' },
        { icon: 'fas fa-robot', title: 'AI и ML', desc: 'Искусственный интеллект и машинное обучение' },
        { icon: 'fas fa-network-wired', title: 'API интеграции', desc: 'REST и GraphQL API для сторонних сервисов' },
        { icon: 'fas fa-lock', title: 'Blockchain', desc: 'Решения на базе распределённого реестра' }
    ],
    en: [
        { icon: 'fas fa-server', title: 'Cloud Infrastructure', desc: 'Scalable solutions based on Kubernetes and Docker' },
        { icon: 'fas fa-shield-alt', title: 'Cybersecurity', desc: 'Data protection and PCI DSS compliance' },
        { icon: 'fas fa-mobile-alt', title: 'Mobile Apps', desc: 'iOS and Android development with native UX' },
        { icon: 'fas fa-database', title: 'Big Data', desc: 'Analytics and real-time big data processing' },
        { icon: 'fas fa-credit-card', title: 'Payment Systems', desc: 'Integration with banks and payment providers' },
        { icon: 'fas fa-robot', title: 'AI & ML', desc: 'Artificial intelligence and machine learning' },
        { icon: 'fas fa-network-wired', title: 'API Integration', desc: 'REST and GraphQL APIs for third-party services' },
        { icon: 'fas fa-lock', title: 'Blockchain', desc: 'Distributed ledger-based solutions' }
    ],
    cn: [
        { icon: 'fas fa-server', title: '云基础设施', desc: '基于Kubernetes和Docker的可扩展解决方案' },
        { icon: 'fas fa-shield-alt', title: '网络安全', desc: '数据保护和PCI DSS合规' },
        { icon: 'fas fa-mobile-alt', title: '移动应用', desc: 'iOS和Android原生UX开发' },
        { icon: 'fas fa-database', title: '大数据', desc: '实时大数据分析处理' },
        { icon: 'fas fa-credit-card', title: '支付系统', desc: '与银行和支付提供商集成' },
        { icon: 'fas fa-robot', title: '人工智能与机器学习', desc: '人工智能和机器学习' },
        { icon: 'fas fa-network-wired', title: 'API集成', desc: '第三方服务的REST和GraphQL API' },
        { icon: 'fas fa-lock', title: '区块链', desc: '基于分布式账本的解决方案' }
    ],
    es: [
        { icon: 'fas fa-server', title: 'Infraestructura Cloud', desc: 'Soluciones escalables basadas en Kubernetes y Docker' },
        { icon: 'fas fa-shield-alt', title: 'Ciberseguridad', desc: 'Protección de datos y cumplimiento PCI DSS' },
        { icon: 'fas fa-mobile-alt', title: 'Apps Móviles', desc: 'Desarrollo iOS y Android con UX nativo' },
        { icon: 'fas fa-database', title: 'Big Data', desc: 'Analítica y procesamiento de big data en tiempo real' },
        { icon: 'fas fa-credit-card', title: 'Sistemas de Pago', desc: 'Integración con bancos y proveedores de pago' },
        { icon: 'fas fa-robot', title: 'IA y ML', desc: 'Inteligencia artificial y aprendizaje automático' },
        { icon: 'fas fa-network-wired', title: 'Integración API', desc: 'APIs REST y GraphQL para servicios de terceros' },
        { icon: 'fas fa-lock', title: 'Blockchain', desc: 'Soluciones basadas en ledger distribuido' }
    ],
    jp: [
        { icon: 'fas fa-server', title: 'クラウドインフラ', desc: 'KubernetesとDockerベースのスケーラブルソリューション' },
        { icon: 'fas fa-shield-alt', title: 'サイバーセキュリティ', desc: 'データ保護とPCI DSS準拠' },
        { icon: 'fas fa-mobile-alt', title: 'モバイルアプリ', desc: 'ネイティブUXのiOSとAndroid開発' },
        { icon: 'fas fa-database', title: 'ビッグデータ', desc: 'リアルタイムビッグデータ分析処理' },
        { icon: 'fas fa-credit-card', title: '決済システム', desc: '銀行と決済プロバイダーとの統合' },
        { icon: 'fas fa-robot', title: 'AIとML', desc: '人工知能と機械学習' },
        { icon: 'fas fa-network-wired', title: 'API統合', desc: 'サードパーティサービスのRESTとGraphQL API' },
        { icon: 'fas fa-lock', title: 'ブロックチェーン', desc: '分散型台帳ベースのソリューション' }
    ]
};


// ==================== ДАННЫЕ ДЛЯ КАРТОЧЕК ПРОЕКТОВ ====================
const projectsData = {
    ru: [
        { id: 'p1', icon: 'store', title: 'Цифровая витрина', short: 'Каталог товаров, остатки, онлайн-продажи', tech: 'Микросервисы, контейнеризация, облако', func: 'Каталог, управление остатками, продажи', int: '1С, онлайн-кассы, платёжные системы', plat: 'Веб, мобильное приложение' },
        { id: 'p2', icon: 'gift', title: 'Оператор лояльности', short: 'Обмен баллов между программами', tech: 'Транзакционный менеджер, API-хаб', func: 'Обмен баллов, вывод через СБП', int: 'Банки, телеком, ритейл, сервисы', plat: 'Мобильное приложение, виджеты' },
        { id: 'p3', icon: 'mobile', title: 'Мобильные приложения', short: 'Native & Cross-platform разработка', tech: 'React Native, нативные модули', func: 'Каталог, корзина, оплата, лояльность', int: 'Камера, геолокация, push-уведомления', plat: 'iOS, Android' },
        { id: 'p4', icon: 'plug', title: 'Интеграционный хаб', short: 'Единая точка подключения партнёров', tech: 'API Gateway, адаптеры, вебхуки', func: 'Управление интеграциями, мониторинг', int: 'REST, SOAP, GraphQL протоколы', plat: 'Облачный сервис, документация API' },
        { id: 'p5', icon: 'chart', title: 'Аналитическая платформа', short: 'Дашборды, отчёты, прогнозирование', tech: 'Потоковая обработка, хранилище данных', func: 'Визуализация, отчёты, экспорты', int: 'Внутренние сервисы, BI-инструменты', plat: 'Веб-интерфейс, мобильные отчёты' },
        { id: 'p6', icon: 'cog', title: 'Административная панель', short: 'Управление пользователями и контентом', tech: 'RBAC, аудит действий, кэширование', func: 'Управление доступом, контентом, тарифами', int: 'Все внутренние сервисы платформы', plat: 'Веб-интерфейс с адаптивным дизайном' },
        { id: 'p7', icon: 'users', title: 'HR-модуль', short: 'Корпоративная мотивация сотрудников', tech: 'Система начисления, геймификация', func: 'Бонусы, обмен корпоративных баллов', int: 'Системы расчёта зарплаты', plat: 'Веб-кабинет, мобильное приложение' },
        { id: 'p8', icon: 'chart', title: 'Маркетинговая платформа', short: 'Сегментация, A/B тесты, автоматизация', tech: 'ML-сегментация, автоматизация рассылок', func: 'Таргетинг, промокоды, рефералки', int: 'Email, SMS, мессенджеры', plat: 'Веб-интерфейс, мобильная интеграция' },
        { id: 'p9', icon: 'truck', title: 'Логистический модуль', short: 'Оптимизация маршрутов доставки', tech: 'Оптимизация маршрутов, трекинг', func: 'Доставка, самовывоз, управление складом', int: 'Курьерские службы, учётные системы', plat: 'Мобильное приложение, веб для логистов' },
        { id: 'p10', icon: 'shield', title: 'Система безопасности', short: 'Шифрование, аутентификация, аудит', tech: 'Шифрование, SIEM, мониторинг угроз', func: 'Защита данных, соответствие 152-ФЗ', int: 'Внешние системы безопасности', plat: 'Облачные сервисы, локальные решения' },
        { id: 'p11', icon: 'bank', title: 'Финансовая инфраструктура', short: 'БПА и банковские решения', tech: 'Специальные счета, автоматизация', func: 'Приём платежей, выплаты партнёрам', int: 'Банки, платёжные системы, онлайн-кассы', plat: 'Облачный сервис, интеграция с 1С' },
        { id: 'p12', icon: 'tag', title: 'White-label решения', short: 'Развёртывание под бренд партнёра', tech: 'Модульная архитектура, кастомизация', func: 'Брендирование, локализация, настройка', int: 'Адаптация под требования клиента', plat: 'Полный набор сервисов под новым брендом' },
        { id: 'p13', icon: 'file', title: 'Система управления контентом', short: 'CMS для управления страницами', tech: 'WYSIWYG редактор, версионирование', func: 'Страницы, новости, акции, SEO', int: 'Мобильное приложение, партнёрские сайты', plat: 'Веб-интерфейс, headless API' },
        { id: 'p14', icon: 'sitemap', title: 'Платформа для франшизы', short: 'Управление франчайзи и роялти', tech: 'Централизованное управление', func: 'Франчайзи, расчёт роялти, стандарты', int: 'Локальные партнёры, региональные особенности', plat: 'Веб-портал, мобильное приложение' },
        { id: 'p15', icon: 'ad', title: 'Рекламная сеть', short: 'Программатик, таргетинг, аналитика', tech: 'RTB, DMP, программатик', func: 'Баннеры, видео, пуш-уведомления', int: 'Яндекс.Директ, ВК, МТС, Билайн', plat: 'In-app, веб, соцсети, партнёрские каналы' },
        { id: 'p16', icon: 'tags', title: 'Агрегатор офферов', short: 'Маркетплейс онлайн/оффлайн предложений', tech: 'Геотаргетинг, ранжирование, купоны', func: 'Каталог офферов, кэшбэк, акции', int: 'Банки, ритейл, сервисы доставки', plat: 'Мобильное приложение, виджеты, API' }
    ],
    en: [
        { id: 'p1', icon: 'store', title: 'Digital Showcase', short: 'Product catalog, inventory, online sales', tech: 'Microservices, containerization, cloud', func: 'Catalog, inventory management, sales', int: '1C, online cash registers, payment systems', plat: 'Web, mobile app' },
        { id: 'p2', icon: 'gift', title: 'Loyalty Operator', short: 'Points exchange between programs', tech: 'Transaction manager, API hub', func: 'Points exchange, SBP withdrawal', int: 'Banks, telecom, retail, services', plat: 'Mobile app, widgets' },
        { id: 'p3', icon: 'mobile', title: 'Mobile Applications', short: 'Native & Cross-platform development', tech: 'React Native, native modules', func: 'Catalog, cart, payment, loyalty', int: 'Camera, geolocation, push notifications', plat: 'iOS, Android' },
        { id: 'p4', icon: 'plug', title: 'Integration Hub', short: 'Single point for partner connection', tech: 'API Gateway, adapters, webhooks', func: 'Integration management, monitoring', int: 'REST, SOAP, GraphQL protocols', plat: 'Cloud service, API documentation' },
        { id: 'p5', icon: 'chart', title: 'Analytics Platform', short: 'Dashboards, reports, forecasting', tech: 'Stream processing, data warehouse', func: 'Visualization, reports, exports', int: 'Internal services, BI tools', plat: 'Web interface, mobile reports' },
        { id: 'p6', icon: 'cog', title: 'Admin Panel', short: 'User and content management', tech: 'RBAC, audit, caching', func: 'Access management, content, tariffs', int: 'All internal platform services', plat: 'Web interface with responsive design' },
        { id: 'p7', icon: 'users', title: 'HR Module', short: 'Employee motivation and bonuses', tech: 'Bonus system, gamification', func: 'Rewards, corporate points exchange', int: 'Payroll systems', plat: 'Web cabinet, mobile app' },
        { id: 'p8', icon: 'chart', title: 'Marketing Platform', short: 'Segmentation, A/B tests, automation', tech: 'ML segmentation, campaign automation', func: 'Targeting, promocodes, referrals', int: 'Email, SMS, messengers', plat: 'Web interface, mobile integration' },
        { id: 'p9', icon: 'truck', title: 'Logistics Module', short: 'Route optimization and tracking', tech: 'Route optimization, real-time tracking', func: 'Delivery, pickup, warehouse management', int: 'Courier services, accounting systems', plat: 'Mobile app, web for logisticians' },
        { id: 'p10', icon: 'shield', title: 'Security System', short: 'Encryption, authentication, audit', tech: 'Encryption, SIEM, threat monitoring', func: 'Data protection, GDPR compliance', int: 'External security systems', plat: 'Cloud services, on-premise' },
        { id: 'p11', icon: 'bank', title: 'Financial Infrastructure', short: 'BaaS and banking solutions', tech: 'Special accounts, automation', func: 'Payment acceptance, partner payouts', int: 'Banks, payment systems, cash registers', plat: 'Cloud service, 1C integration' },
        { id: 'p12', icon: 'tag', title: 'White-Label Solutions', short: 'Deployment under partner brand', tech: 'Modular architecture, customization', func: 'Branding, localization, configuration', int: 'Client requirements adaptation', plat: 'Full service suite under new brand' },
        { id: 'p13', icon: 'file', title: 'Content Management', short: 'CMS for page management', tech: 'WYSIWYG editor, versioning', func: 'Pages, news, promotions, SEO', int: 'Mobile app, partner websites', plat: 'Web interface, headless API' },
        { id: 'p14', icon: 'sitemap', title: 'Franchise Platform', short: 'Franchisee and royalty management', tech: 'Centralized management', func: 'Franchisees, royalty calculation, standards', int: 'Local partners, regional features', plat: 'Web portal, mobile app' },
        { id: 'p15', icon: 'ad', title: 'Ad Network', short: 'Programmatic, targeting, analytics', tech: 'RTB, DMP, programmatic', func: 'Banners, video, push notifications', int: 'Google Ads, Facebook, carriers', plat: 'In-app, web, social, partner channels' },
        { id: 'p16', icon: 'tags', title: 'Offers Aggregator', short: 'Marketplace for online/offline offers', tech: 'Geotargeting, ranking, coupons', func: 'Offers catalog, cashback, promotions', int: 'Banks, retail, delivery services', plat: 'Mobile app, widgets, API' }
    ],
    cn: [
        { id: 'p1', icon: 'store', title: '数字展示柜', short: '产品目录、库存、在线销售', tech: '微服务、容器化、云', func: '目录、库存管理、销售', int: '1C、在线收银机、支付系统', plat: '网页、移动应用' },
        { id: 'p2', icon: 'gift', title: '忠诚度运营商', short: '积分跨计划兑换', tech: '交易管理器、API中心', func: '积分兑换、SBP提款', int: '银行、电信、零售、服务', plat: '移动应用、小部件' },
        { id: 'p3', icon: 'mobile', title: '移动应用', short: '原生与跨平台开发', tech: 'React Native、原生模块', func: '目录、购物车、支付、忠诚度', int: '相机、地理位置、推送通知', plat: 'iOS、安卓' },
        { id: 'p4', icon: 'plug', title: '集成中心', short: '合作伙伴统一接入点', tech: 'API网关、适配器、网络钩子', func: '集成管理、监控', int: 'REST、SOAP、GraphQL协议', plat: '云服务、API文档' },
        { id: 'p5', icon: 'chart', title: '分析平台', short: '仪表板、报告、预测', tech: '流处理、数据仓库', func: '可视化、报告、导出', int: '内部服务、BI工具', plat: '网页界面、移动报告' },
        { id: 'p6', icon: 'cog', title: '管理面板', short: '用户和内容管理', tech: 'RBAC、审计、缓存', func: '访问管理、内容、资费', int: '所有内部平台服务', plat: '响应式网页界面' },
        { id: 'p7', icon: 'users', title: '人力资源模块', short: '员工激励与奖金', tech: '奖金系统、游戏化', func: '奖励、企业积分兑换', int: '工资系统', plat: '网页后台、移动应用' },
        { id: 'p8', icon: 'chart', title: '营销平台', short: '细分、A/B测试、自动化', tech: '机器学习细分、活动自动化', func: '定向、促销码、推荐', int: '邮件、短信、即时通讯', plat: '网页界面、移动集成' },
        { id: 'p9', icon: 'truck', title: '物流模块', short: '路线优化与跟踪', tech: '路线优化、实时跟踪', func: '配送、自提、仓库管理', int: '快递服务、会计系统', plat: '移动应用、物流网页' },
        { id: 'p10', icon: 'shield', title: '安全系统', short: '加密、认证、审计', tech: '加密、SIEM、威胁监控', func: '数据保护、GDPR合规', int: '外部安全系统', plat: '云服务、本地部署' },
        { id: 'p11', icon: 'bank', title: '金融基础设施', short: '银行即服务和银行解决方案', tech: '专用账户、自动化', func: '收款、合作伙伴付款', int: '银行、支付系统、收银机', plat: '云服务、1C集成' },
        { id: 'p12', icon: 'tag', title: '白标解决方案', short: '以合作伙伴品牌部署', tech: '模块化架构、定制', func: '品牌化、本地化、配置', int: '客户需求适配', plat: '新品牌下的全套服务' },
        { id: 'p13', icon: 'file', title: '内容管理系统', short: '页面管理CMS', tech: '所见即所得编辑器、版本控制', func: '页面、新闻、促销、SEO', int: '移动应用、合作伙伴网站', plat: '网页界面、无头API' },
        { id: 'p14', icon: 'sitemap', title: '加盟平台', short: '加盟商和特许权使用费管理', tech: '集中管理', func: '加盟商、特许权使用费计算、标准', int: '本地合作伙伴、区域特色', plat: '网页门户、移动应用' },
        { id: 'p15', icon: 'ad', title: '广告网络', short: '程序化、定向、分析', tech: 'RTB、DMP、程序化', func: '横幅、视频、推送通知', int: '谷歌广告、脸书、运营商', plat: '应用内、网页、社交、合作伙伴渠道' },
        { id: 'p16', icon: 'tags', title: '优惠聚合器', short: '线上/线下优惠市场', tech: '地理定向、排名、优惠券', func: '优惠目录、返现、促销', int: '银行、零售、配送服务', plat: '移动应用、小部件、API' }
    ],
    es: [
        { id: 'p1', icon: 'store', title: 'Vitrina Digital', short: 'Catálogo, inventario, ventas online', tech: 'Microservicios, contenedores, nube', func: 'Catálogo, gestión de inventario, ventas', int: '1C, cajas registradoras, pagos', plat: 'Web, app móvil' },
        { id: 'p2', icon: 'gift', title: 'Operador de Lealtad', short: 'Intercambio de puntos entre programas', tech: 'Gestor de transacciones, hub API', func: 'Intercambio de puntos, retiro SBP', int: 'Bancos, telecom, retail, servicios', plat: 'App móvil, widgets' },
        { id: 'p3', icon: 'mobile', title: 'Aplicaciones Móviles', short: 'Desarrollo nativo y multiplataforma', tech: 'React Native, módulos nativos', func: 'Catálogo, carrito, pago, lealtad', int: 'Cámara, geolocalización, push', plat: 'iOS, Android' },
        { id: 'p4', icon: 'plug', title: 'Hub de Integración', short: 'Punto único para conexión de socios', tech: 'API Gateway, adaptadores, webhooks', func: 'Gestión de integraciones, monitoreo', int: 'Protocolos REST, SOAP, GraphQL', plat: 'Servicio cloud, documentación API' },
        { id: 'p5', icon: 'chart', title: 'Plataforma Analítica', short: 'Dashboards, informes, predicción', tech: 'Procesamiento en streaming, data warehouse', func: 'Visualización, informes, exportaciones', int: 'Servicios internos, herramientas BI', plat: 'Interfaz web, informes móviles' },
        { id: 'p6', icon: 'cog', title: 'Panel de Administración', short: 'Gestión de usuarios y contenido', tech: 'RBAC, auditoría, caché', func: 'Gestión de acceso, contenido, tarifas', int: 'Todos los servicios internos', plat: 'Interfaz web responsive' },
        { id: 'p7', icon: 'users', title: 'Módulo RRHH', short: 'Motivación y bonos de empleados', tech: 'Sistema de bonos, gamificación', func: 'Recompensas, intercambio de puntos', int: 'Sistemas de nómina', plat: 'Web, app móvil' },
        { id: 'p8', icon: 'chart', title: 'Plataforma de Marketing', short: 'Segmentación, A/B tests, automatización', tech: 'Segmentación ML, automatización', func: 'Targeting, códigos promocionales', int: 'Email, SMS, mensajeros', plat: 'Interfaz web, integración móvil' },
        { id: 'p9', icon: 'truck', title: 'Módulo Logístico', short: 'Optimización de rutas y tracking', tech: 'Optimización de rutas, tracking', func: 'Entrega, recogida, almacén', int: 'Servicios de mensajería, contabilidad', plat: 'App móvil, web para logísticos' },
        { id: 'p10', icon: 'shield', title: 'Sistema de Seguridad', short: 'Encriptación, autenticación, auditoría', tech: 'Encriptación, SIEM, monitoreo', func: 'Protección de datos, cumplimiento GDPR', int: 'Sistemas de seguridad externos', plat: 'Servicios cloud, on-premise' },
        { id: 'p11', icon: 'bank', title: 'Infraestructura Financiera', short: 'BaaS y soluciones bancarias', tech: 'Cuentas especiales, automatización', func: 'Aceptación de pagos, pagos a socios', int: 'Bancos, sistemas de pago, cajas', plat: 'Servicio cloud, integración 1C' },
        { id: 'p12', icon: 'tag', title: 'Soluciones White-Label', short: 'Despliegue bajo marca de socio', tech: 'Arquitectura modular, personalización', func: 'Branding, localización, configuración', int: 'Adaptación a requisitos del cliente', plat: 'Suite completa bajo nueva marca' },
        { id: 'p13', icon: 'file', title: 'Gestión de Contenidos', short: 'CMS para gestión de páginas', tech: 'Editor WYSIWYG, versionado', func: 'Páginas, noticias, promociones, SEO', int: 'App móvil, sitios de socios', plat: 'Interfaz web, API headless' },
        { id: 'p14', icon: 'sitemap', title: 'Plataforma de Franquicia', short: 'Gestión de franquiciatarios y regalías', tech: 'Gestión centralizada', func: 'Franquiciatarios, cálculo de regalías', int: 'Socios locales, características regionales', plat: 'Portal web, app móvil' },
        { id: 'p15', icon: 'ad', title: 'Red Publicitaria', short: 'Programático, targeting, analítica', tech: 'RTB, DMP, programático', func: 'Banners, video, notificaciones push', int: 'Google Ads, Facebook, carriers', plat: 'In-app, web, social, canales socios' },
        { id: 'p16', icon: 'tags', title: 'Agregador de Ofertas', short: 'Marketplace de ofertas online/offline', tech: 'Geotargeting, ranking, cupones', func: 'Catálogo de ofertas, cashback, promos', int: 'Bancos, retail, servicios de entrega', plat: 'App móvil, widgets, API' }
    ],
    jp: [
        { id: 'p1', icon: 'store', title: 'デジタルショーケース', short: '商品カタログ、在庫、オンライン販売', tech: 'マイクロサービス、コンテナ化、クラウド', func: 'カタログ、在庫管理、販売', int: '1C、オンラインレジ、決済システム', plat: 'ウェブ、モバイルアプリ' },
        { id: 'p2', icon: 'gift', title: 'ロイヤルティオペレーター', short: 'プログラム間ポイント交換', tech: 'トランザクションマネージャー、APIハブ', func: 'ポイント交換、SBP出金', int: '銀行、通信、小売、サービス', plat: 'モバイルアプリ、ウィジェット' },
        { id: 'p3', icon: 'mobile', title: 'モバイルアプリケーション', short: 'ネイティブとクロスプラットフォーム開発', tech: 'React Native、ネイティブモジュール', func: 'カタログ、カート、決済、ロイヤルティ', int: 'カメラ、位置情報、プッシュ通知', plat: 'iOS、アンドロイド' },
        { id: 'p4', icon: 'plug', title: '統合ハブ', short: 'パートナー接続の単一ポイント', tech: 'APIゲートウェイ、アダプター、Webhook', func: '統合管理、モニタリング', int: 'REST、SOAP、GraphQLプロトコル', plat: 'クラウドサービス、APIドキュメント' },
        { id: 'p5', icon: 'chart', title: '分析プラットフォーム', short: 'ダッシュボード、レポート、予測', tech: 'ストリーム処理、データウェアハウス', func: '可視化、レポート、エクスポート', int: '内部サービス、BIツール', plat: 'ウェブインターフェース、モバイルレポート' },
        { id: 'p6', icon: 'cog', title: '管理パネル', short: 'ユーザーとコンテンツ管理', tech: 'RBAC、監査、キャッシング', func: 'アクセス管理、コンテンツ、料金', int: 'すべての内部プラットフォームサービス', plat: 'レスポンシブウェブインターフェース' },
        { id: 'p7', icon: 'users', title: '人事モジュール', short: '従業員モチベーションとボーナス', tech: 'ボーナスシステム、ゲーミフィケーション', func: '報酬、企業ポイント交換', int: '給与計算システム', plat: 'ウェブキャビネット、モバイルアプリ' },
        { id: 'p8', icon: 'chart', title: 'マーケティングプラットフォーム', short: 'セグメンテーション、A/Bテスト、自動化', tech: 'MLセグメンテーション、キャンペーン自動化', func: 'ターゲティング、プロモコード、紹介', int: 'メール、SMS、メッセンジャー', plat: 'ウェブインターフェース、モバイル統合' },
        { id: 'p9', icon: 'truck', title: '物流モジュール', short: 'ルート最適化と追跡', tech: 'ルート最適化、リアルタイム追跡', func: '配送、受取、倉庫管理', int: '宅配サービス、会計システム', plat: 'モバイルアプリ、物流用ウェブ' },
        { id: 'p10', icon: 'shield', title: 'セキュリティシステム', short: '暗号化、認証、監査', tech: '暗号化、SIEM、脅威モニタリング', func: 'データ保護、GDPR準拠', int: '外部セキュリティシステム', plat: 'クラウドサービス、オンプレミス' },
        { id: 'p11', icon: 'bank', title: '金融インフラ', short: 'BaaSと銀行ソリューション', tech: '特別口座、自動化', func: '支払い受付、パートナー支払い', int: '銀行、決済システム、レジ', plat: 'クラウドサービス、1C統合' },
        { id: 'p12', icon: 'tag', title: 'ホワイトラベルソリューション', short: 'パートナーブランドでの展開', tech: 'モジュラーアーキテクチャ、カスタマイズ', func: 'ブランディング、ローカライゼーション、設定', int: 'クライアント要件への適応', plat: '新ブランドでのフルサービススイート' },
        { id: 'p13', icon: 'file', title: 'コンテンツ管理システム', short: 'ページ管理用CMS', tech: 'WYSIWYGエディタ、バージョニング', func: 'ページ、ニュース、プロモーション、SEO', int: 'モバイルアプリ、パートナーウェブサイト', plat: 'ウェブインターフェース、ヘッドレスAPI' },
        { id: 'p14', icon: 'sitemap', title: 'フランチャイズプラットフォーム', short: 'フランチャイズとロイヤルティ管理', tech: '集中管理', func: 'フランチャイズ、ロイヤルティ計算、標準', int: 'ローカルパートナー、地域特性', plat: 'ウェブポータル、モバイルアプリ' },
        { id: 'p15', icon: 'ad', title: '広告ネットワーク', short: 'プログラマティック、ターゲティング、分析', tech: 'RTB、DMP、プログラマティック', func: 'バナー、動画、プッシュ通知', int: 'グーグル広告、フェイスブック、キャリア', plat: 'アプリ内、ウェブ、ソーシャル、パートナーチャンネル' },
        { id: 'p16', icon: 'tags', title: 'オファーアグリゲーター', short: 'オンライン/オフラインオファーマーケットプレイス', tech: 'ジオターゲティング、ランキング、クーポン', func: 'オファーカタログ、キャッシュバック、プロモーション', int: '銀行、小売、配送サービス', plat: 'モバイルアプリ、ウィジェット、API' }
    ]
};

