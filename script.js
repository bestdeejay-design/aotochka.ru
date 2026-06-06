// script.js — логика для TOCH.KA (с отладкой)

// ==================== ДАННЫЕ ПЕРЕВОДОВ ====================
const translations = {
    ru: {
        menu_hero: 'Главная',
        menu_technologies: 'Технологии',
        menu_security: 'Безопасность',
        menu_banking: 'Банковские',
        menu_projects: 'Проекты',
        menu_cases: 'Кейсы',
        menu_contacts: 'Контакты',
                menu_company: 'АО «Точка» Технологические решения',
        menu_footer: 'Футер',
        hero_line1: 'TOCH.KA',
        hero_line2: 'технологический партнёр',
        hero_line3: 'финтех и платежи для малого бизнеса',
        tech_title: 'Технологии',
        security_title: 'Безопасность',
        security_desc: 'Хранение данных в РФ, сквозное шифрование, регулярные пентесты и WAF-защита.',
        sec_card1_title: 'Защита периметра',
        sec_card1_problem: 'DDoS, взломы, боты',
        sec_card1_solution: 'Непрерывный мониторинг периметра (EASM). Выявление уязвимостей до эксплуатации.',
        sec_card2_title: 'Безопасная разработка',
        sec_card2_problem: 'Ошибки в коде, утечки из тестовых сред, «теневые» IT-инструменты.',
        sec_card2_solution: 'Автоматизация проверок в CI/CD, изоляция тестовых данных.',
        sec_card3_title: 'Реагирование 24/7',
        sec_card3_solution: 'Круглосуточный мониторинг инцидентов и расследование киберпреступлений.',
        sec_card4_title: 'Технологии и стандарты',
        sec_toggle_problem: 'Проблема',
        sec_cat_monitoring: 'Мониторинг',
        sec_cat_perimeter: 'Периметр',
        sec_cat_access: 'Доступ',
        sec_cat_dev: 'DevSecOps',
        sec_cat_standards: 'Стандарты',
        sec_pill_siem: 'SIEM',
        sec_pill_edr: 'EDR/XDR',
        sec_pill_nta: 'NTA/NDR',
        sec_pill_ngfw: 'NGFW',
        sec_pill_waf: 'WAF',
        sec_pill_antiddos: 'Anti-DDoS',
        sec_pill_iam: 'IAM',
        sec_pill_pam: 'PAM',
        sec_pill_zerotrust: 'Zero Trust',
        sec_pill_sast: 'SAST',
        sec_pill_dast: 'DAST',
        sec_pill_k8s: 'K8s',
        sec_pill_iso27001: 'ISO 27001',
        sec_pill_pcidss: 'PCI DSS',
        sec_pill_152fz: '152-ФЗ',
        sec_pill_owasp: 'OWASP',
        banking_title: 'Банковские интеграции',
        banking_desc: 'Модель платежного агента, СБП, Mir Pay, специальные счета и интеграция с ОФД.',
        bank_card1_title: 'Платежная инфраструктура',
        bank_item_acquiring: 'Интернет-эквайринг — Visa, Mastercard, МИР',
        bank_item_sbp: 'СБП — оплата по QR-коду, от 0,4%',
        bank_item_multi: 'Мультиэквайринг — отказоустойчивость',
        bank_item_recurring: 'Рекуррентные платежи — подписки, SaaS',
        bank_card2_title: 'BaaS & White Label',
        bank_item_baas: 'Banking as a Service — API',
        bank_item_white: 'White Label — под вашим брендом',
        bank_item_cards: 'Эмиссия карт — виртуальные и пластик',
        bank_card3_title: 'Модели работы',
        bank_item_agent: 'Платежный агент (161-ФЗ)',
        bank_item_split: 'Сплитование платежей',
        bank_item_escrow: 'Безопасные сделки (Escrow)',
        bank_security_pci: 'PCI DSS, 3D Secure, токенизация',
        bank_security_fraud: 'Антифрод, скоринг',
        bank_security_law: '115-ФЗ, 161-ФЗ, 152-ФЗ',
        bank_card4_title: 'Безопасность и Compliance',
        bank_flow_in_title: 'Прием платежей',
        bank_flow_proc_title: 'Обработка',
        bank_flow_out_title: 'Безопасность',
        bank_baas_header: 'BaaS & White Label',
        bank_baas_api: 'Banking API',
        bank_baas_white: 'White Label',
        bank_baas_cards: 'Эмиссия карт',
        bank_baas_payroll: 'Зарплатные проекты',
        bank_baas_wallets: 'Кошельки',
        bank_baas_p2p: 'P2P-переводы',
        bank_baas_credit: 'Кредитование',
        bank_baas_deposits: 'Депозиты',
        bank_pill_rest: 'REST API',
        bank_pill_openapi: 'Open API 3.0',
        bank_pill_webhooks: 'Webhooks',
        bank_pill_custom: 'Кастомизация',
        bank_pill_mobile: 'Мобильное приложение',
        bank_pill_plastic: 'Пластиковые',
        bank_pill_cobadge: 'Кобейджинг',
        bank_pill_bulk: 'Массовые выплаты',
        bank_pill_employees: 'Сотрудники',
        bank_pill_contractors: 'Подрядчики',
        bank_pill_issue: 'Выпуск',
        bank_pill_topup: 'Пополнение',
        bank_pill_withdraw: 'Вывод средств',
        bank_pill_instant: 'Мгновенные',
        bank_pill_byphone: 'По номеру телефона',
        bank_pill_qr: 'QR-код',
        bank_pill_pos: 'POS-кредиты',
        bank_pill_install: 'Рассрочка',
        bank_pill_bnpl: 'BNPL',
        bank_pill_savings: 'Накопительные',
        bank_pill_term: 'Срочные',
        bank_pill_deposits: 'Вклады',
        bank_escrow_title: 'Безопасные сделки',
        bank_escrow_c2c: 'Escrow для C2C и B2B',
        bank_escrow_c2c_desc: 'резервирование средств до выполнения обязательств',
        bank_escrow_guarantee: 'Гарантия безопасности',
        bank_escrow_guarantee_desc: 'защита для всех участников сделки',
        bank_escrow_auto: 'Автоматическое освобождение',
        bank_escrow_auto_desc: 'по факту выполнения условий',
        bank_escrow_arbitrage: 'Арбитраж',
        bank_escrow_arbitrage_desc: 'разрешение спорных ситуаций',
        bank_liquidity_title: 'Управление ликвидностью',
        bank_liquidity_cash: 'Cash Management',
        bank_liquidity_cash_desc: 'консолидация и управление денежными потоками',
        bank_liquidity_predict: 'Предиктивная аналитика',
        bank_liquidity_predict_desc: 'прогнозирование потребностей в ликвидности',
        bank_liquidity_diversify: 'Диверсификация',
        bank_liquidity_diversify_desc: 'распределение фондирования между банками',
        bank_liquidity_optimize: 'Оптимизация',
        bank_liquidity_optimize_desc: 'снижение стоимости привлечения средств',
        bank_compliance_label: 'Compliance & Стандарты:',
        bank_compliance_law: 'Законодательство РФ:',
        bank_compliance_payment: 'Платежные стандарты:',
        bank_compliance_security: 'Информационная безопасность:',
        bank_compliance_api: 'API и интеграции:',
        bank_tag_115fz: '115-ФЗ (AML/CFT)',
        bank_tag_161fz: '161-ФЗ (НПС)',
        bank_tag_152fz: '152-ФЗ (ПДн)',
        bank_tag_187fz: '187-ФЗ (КИИ)',
        bank_tag_pci: 'PCI DSS Level 1',
        bank_tag_3ds: '3D Secure 2.0',
        bank_tag_token: 'Токенизация карт',
        bank_tag_sbp: 'SBP (Система быстрых платежей)',
        bank_tag_gost57580: 'ГОСТ 57580',
        bank_tag_gost27001: 'ГОСТ Р ИСО/МЭК 27001',
        bank_tag_cbest: 'CBEST (тестирование)',
        bank_tag_openapi: 'Open API 3.0',
        bank_tag_rest: 'REST/JSON',
        bank_tag_oauth: 'OAuth 2.0',
        bank_tag_webhooks: 'Webhooks',
        projects_title: 'Наши проекты',
        projects_desc: 'Более 50 успешных внедрений в ритейле, HoReCa и финтехе.',
        cases_title: 'Кейсы',
        case_loyalty_name: 'Платформа мультиканальной лояльности',
        case_loyalty_desc: '<p>iOS/Android приложения для клиентов и кассиров</p><p>Онлайн-переводы баллов в реальном времени</p><p>Интеграция с Яндекс.Go, Сбербанк, Тинькофф</p><p>Конвертация баллов в промокоды Ozon, Wildberries</p><p>Вывод на банковскую карту (СБП)</p><p>Оплата баллами в 10 000+ торговых точках</p>',
        case_blockchain_name: 'Приватная блокчейн-платформа',
        case_blockchain_desc: '<p>База данных на BigChainDB — открытый исходный код</p><p>Цифровая инвентаризация с многоуровневой системой каталогов</p><p>Смарт-контракты для автоматических транзакций</p><p>Ролевая модель: автор, владелец, арендатор, покупатель</p><p>Криптографическая защита и внешняя авторизация</p><p>Независимость от внешних платформ</p>',
        case_blockchain: '',
        integrations_title: 'Мы интегрировали',
        menu_cases: 'Кейсы',
        case_loyalty_name: 'Программа лояльности',
        case_loyalty_name: 'Платформа мультиканальной лояльности',
        case_loyalty_desc: '<p>iOS/Android приложения для клиентов и кассиров</p><p>Онлайн-переводы баллов в реальном времени</p><p>Интеграция с Яндекс.Go, Сбербанк, Тинькофф</p><p>Конвертация баллов в промокоды Ozon, Wildberries</p><p>Вывод на банковскую карту (СБП)</p><p>Оплата баллами в 10 000+ торговых точках</p>',
        case_blockchain_name: 'Приватная блокчейн-платформа',
        case_blockchain_desc: '<p>База данных на BigChainDB — открытый исходный код</p><p>Цифровая инвентаризация с многоуровневой системой каталогов</p><p>Смарт-контракты для автоматических транзакций</p><p>Ролевая модель: автор, владелец, арендатор, покупатель</p><p>Криптографическая защита и внешняя авторизация</p><p>Независимость от внешних платформ</p>',
        contacts_text: 'АО «Точка»<br>ИНН 9723270767<br>109651, г. Москва, ул. Перерва, д. 16, пом. 16П<br>+7 (911) 928-74-78<br>hello@aotochka.ru',
        footer_copyright: '© 2025 TOCH.KA',
        footer_rights: 'Все права защищены'
    },
    en: {
        menu_hero: 'Home',
        menu_technologies: 'Technologies',
        menu_security: 'Security',
        menu_banking: 'Banking',
        menu_projects: 'Projects',
        menu_contacts: 'Contacts',
                menu_company: 'TOCH.KA Tech Solutions',
        menu_footer: 'Footer',
        hero_line1: 'TOCH.KA',
        hero_line2: 'Technology Partner',
        hero_line3: 'Fintech & Payments for Small Business',
        tech_title: 'Technologies',
        security_title: 'Security',
        security_desc: 'Data storage in Russia, end-to-end encryption, regular pentests and WAF protection.',
        sec_card1_title: 'Perimeter Protection',
        sec_card1_problem: 'DDoS, intrusions, bots',
        sec_card1_solution: 'Continuous perimeter monitoring (EASM). Vulnerability detection before exploitation.',
        sec_card2_title: 'Secure Development',
        sec_card2_problem: 'Code errors, test environment leaks, shadow IT tools.',
        sec_card2_solution: 'Automated security checks in CI/CD, test data isolation.',
        sec_card3_title: '24/7 Incident Response',
        sec_card3_solution: 'Round-the-clock incident monitoring and cybercrime investigation.',
        sec_card4_title: 'Technologies & Standards',
        sec_toggle_problem: 'Problem',
        sec_cat_monitoring: 'Monitoring',
        sec_cat_perimeter: 'Perimeter',
        sec_cat_access: 'Access',
        sec_cat_dev: 'DevSecOps',
        sec_cat_standards: 'Standards',
        sec_pill_siem: 'SIEM',
        sec_pill_edr: 'EDR/XDR',
        sec_pill_nta: 'NTA/NDR',
        sec_pill_ngfw: 'NGFW',
        sec_pill_waf: 'WAF',
        sec_pill_antiddos: 'Anti-DDoS',
        sec_pill_iam: 'IAM',
        sec_pill_pam: 'PAM',
        sec_pill_zerotrust: 'Zero Trust',
        sec_pill_sast: 'SAST',
        sec_pill_dast: 'DAST',
        sec_pill_k8s: 'K8s',
        sec_pill_iso27001: 'ISO 27001',
        sec_pill_pcidss: 'PCI DSS',
        sec_pill_152fz: '152-FZ',
        sec_pill_owasp: 'OWASP',
        banking_title: 'Banking Integrations',
        banking_desc: 'Payment agent model, SBP, Mir Pay, special accounts and OFD integration.',
        bank_card1_title: 'Payment Infrastructure',
        bank_item_acquiring: 'Internet acquiring — Visa, Mastercard, MIR',
        bank_item_sbp: 'SBP — QR-code payments, from 0.4%',
        bank_item_multi: 'Multi-acquiring — fault tolerance',
        bank_item_recurring: 'Recurring payments — subscriptions, SaaS',
        bank_card2_title: 'BaaS & White Label',
        bank_item_baas: 'Banking as a Service — API',
        bank_item_white: 'White Label — under your brand',
        bank_item_cards: 'Card issuance — virtual and plastic',
        bank_card3_title: 'Business Models',
        bank_item_agent: 'Payment agent (161-FZ)',
        bank_item_split: 'Payment splitting',
        bank_item_escrow: 'Secure deals (Escrow)',
        bank_security_pci: 'PCI DSS, 3D Secure, tokenization',
        bank_security_fraud: 'Antifraud, scoring',
        bank_security_law: '115-FZ, 161-FZ, 152-FZ',
        bank_card4_title: 'Security & Compliance',
        bank_flow_in_title: 'Payment Acceptance',
        bank_flow_proc_title: 'Processing',
        bank_flow_out_title: 'Security',
        bank_baas_header: 'BaaS & White Label',
        bank_baas_api: 'Banking API',
        bank_baas_white: 'White Label',
        bank_baas_cards: 'Card Issuance',
        bank_baas_payroll: 'Payroll Projects',
        bank_baas_wallets: 'Wallets',
        bank_baas_p2p: 'P2P Transfers',
        bank_baas_credit: 'Lending',
        bank_baas_deposits: 'Deposits',
        bank_pill_rest: 'REST API',
        bank_pill_openapi: 'Open API 3.0',
        bank_pill_webhooks: 'Webhooks',
        bank_pill_custom: 'Customization',
        bank_pill_mobile: 'Mobile App',
        bank_pill_plastic: 'Plastic',
        bank_pill_cobadge: 'Cobadge',
        bank_pill_bulk: 'Bulk Payments',
        bank_pill_employees: 'Employees',
        bank_pill_contractors: 'Contractors',
        bank_pill_issue: 'Issue',
        bank_pill_topup: 'Top-up',
        bank_pill_withdraw: 'Withdrawal',
        bank_pill_instant: 'Instant',
        bank_pill_byphone: 'By Phone',
        bank_pill_qr: 'QR Code',
        bank_pill_pos: 'POS Loans',
        bank_pill_install: 'Installments',
        bank_pill_bnpl: 'BNPL',
        bank_pill_savings: 'Savings',
        bank_pill_term: 'Term',
        bank_pill_deposits: 'Deposits',
        bank_escrow_title: 'Secure Deals',
        bank_escrow_c2c: 'Escrow for C2C & B2B',
        bank_escrow_c2c_desc: 'funds reservation until obligations are fulfilled',
        bank_escrow_guarantee: 'Security Guarantee',
        bank_escrow_guarantee_desc: 'protection for all parties',
        bank_escrow_auto: 'Automatic Release',
        bank_escrow_auto_desc: 'upon condition fulfillment',
        bank_escrow_arbitrage: 'Arbitration',
        bank_escrow_arbitrage_desc: 'dispute resolution',
        bank_liquidity_title: 'Liquidity Management',
        bank_liquidity_cash: 'Cash Management',
        bank_liquidity_cash_desc: 'consolidation and cash flow management',
        bank_liquidity_predict: 'Predictive Analytics',
        bank_liquidity_predict_desc: 'liquidity needs forecasting',
        bank_liquidity_diversify: 'Diversification',
        bank_liquidity_diversify_desc: 'funding distribution across banks',
        bank_liquidity_optimize: 'Optimization',
        bank_liquidity_optimize_desc: 'reducing funding costs',
        bank_compliance_label: 'Compliance & Standards:',
        bank_compliance_law: 'Russian Legislation:',
        bank_compliance_payment: 'Payment Standards:',
        bank_compliance_security: 'Information Security:',
        bank_compliance_api: 'API & Integrations:',
        bank_tag_115fz: '115-FZ (AML/CFT)',
        bank_tag_161fz: '161-FZ (NPS)',
        bank_tag_152fz: '152-FZ (PDn)',
        bank_tag_187fz: '187-FZ (CII)',
        bank_tag_pci: 'PCI DSS Level 1',
        bank_tag_3ds: '3D Secure 2.0',
        bank_tag_token: 'Card Tokenization',
        bank_tag_sbp: 'SBP (Fast Payment System)',
        bank_tag_gost57580: 'GOST 57580',
        bank_tag_gost27001: 'GOST R ISO/IEC 27001',
        bank_tag_cbest: 'CBEST (testing)',
        bank_tag_openapi: 'Open API 3.0',
        bank_tag_rest: 'REST/JSON',
        bank_tag_oauth: 'OAuth 2.0',
        bank_tag_webhooks: 'Webhooks',
        projects_title: 'Our Projects',
        projects_desc: 'Over 50 successful implementations in retail, HoReCa and fintech.',
        cases_title: 'Cases',
        case_loyalty_name: 'Multichannel Loyalty Platform',
        case_loyalty_desc: '<p>iOS/Android apps for customers and cashiers</p><p>Real-time online point transfers</p><p>Integration with Yandex.Go, Sberbank, Tinkoff</p><p>Points conversion to Ozon, Wildberries promo codes</p><p>Bank card withdrawal via SBP</p><p>Payment with points at 10,000+ retail locations</p>',
        case_blockchain_name: 'Private Blockchain Platform',
        case_blockchain_desc: '<p>Database on BigChainDB — open source</p><p>Digital inventory with multi-level catalog system</p><p>Smart contracts for automatic transactions</p><p>Role model: author, owner, tenant, buyer</p><p>Cryptographic protection and external authorization</p><p>Independence from external platforms</p>',
        case_blockchain: '',
        integrations_title: 'We have integrated',
        case_loyalty_name: 'Программа лояльности',
        case_loyalty_name: 'Multichannel Loyalty Platform',
        case_loyalty_desc: '<p>iOS/Android apps for customers and cashiers</p><p>Real-time online point transfers</p><p>Integration with Yandex.Go, Sberbank, Tinkoff</p><p>Points conversion to Ozon, Wildberries promo codes</p><p>Bank card withdrawal via SBP</p><p>Payment with points at 10,000+ retail locations</p>',
        case_blockchain_name: 'Private Blockchain Platform',
        case_blockchain_desc: '<p>Database on BigChainDB — open source</p><p>Digital inventory with multi-level catalog system</p><p>Smart contracts for automatic transactions</p><p>Role model: author, owner, tenant, buyer</p><p>Cryptographic protection and external authorization</p><p>Independence from external platforms</p>',
        contacts_text: 'TOCH.KA JSC<br>TIN 9723270767<br>109651, Moscow, Pererva Street, 16, Building 16P<br>+7 (911) 928-74-78<br>hello@aotochka.ru',
        int_beeline: 'Beeline',
        int_yandexgo: 'Yandex.Go',
        int_cdek: 'CDEK',
        int_tinkoff: 'Tinkoff',
        int_1c: '1C',
        int_sberbank: 'Sberbank',
        int_alfabank: 'Alfa-Bank',
        int_yoomoney: 'YooMoney',
        int_mts: 'MTS',
        int_aviasales: 'Aviasales',
        int_yandex: 'Yandex',
        int_ostrovok: 'Ostrovok.ru',
        int_sravni: 'Sravni.ru',
        int_admitad: 'Admitad',
        int_giftery: 'Giftery',
        int_advcake: 'adv.cake',
        int_xpartners: 'XPartners',
        int_fotostrana: 'Fotostrana',
        int_magnit: 'Magnit',
        int_lenta: 'Lenta',
        int_auchan: 'Auchan',
        int_metro: 'Metro',
        int_globus: 'Globus',
        int_superbabilon: 'SuperBabylon',
        footer_copyright: '© 2025 TOCH.KA',
        footer_rights: 'All rights reserved'
    },
    cn: {
        menu_hero: '首页',
        menu_technologies: '技术',
        menu_security: '安全',
        menu_banking: '银行',
        menu_projects: '项目',
        menu_cases: '案例',
        menu_contacts: '联系',
                menu_company: 'TOCH.KA 技术解决方案',
        menu_footer: '页脚',
        hero_line1: 'TOCH.KA',
        hero_line2: '技术合作伙伴',
        hero_line3: '中小企业的金融科技与支付',
        tech_title: '技术',
        security_title: '安全',
        security_desc: '数据存储在俄罗斯、端到端加密、定期渗透测试和WAF保护。',
        sec_card1_title: '边界保护',
        sec_card1_problem: 'DDoS、入侵、机器人',
        sec_card1_solution: '持续边界监控（EASM）。在利用之前发现漏洞。',
        sec_card2_title: '安全开发',
        sec_card2_problem: '代码错误、测试环境泄漏、影子IT工具。',
        sec_card2_solution: 'CI/CD中的自动化安全检查，测试数据隔离。',
        sec_card3_title: '24/7事件响应',
        sec_card3_solution: '全天候事件监控和网络犯罪调查。',
        sec_card4_title: '技术与标准',
        sec_toggle_problem: '问题',
        sec_cat_monitoring: '监控',
        sec_cat_perimeter: '边界',
        sec_cat_access: '访问',
        sec_cat_dev: 'DevSecOps',
        sec_cat_standards: '标准',
        sec_pill_siem: 'SIEM',
        sec_pill_edr: 'EDR/XDR',
        sec_pill_nta: 'NTA/NDR',
        sec_pill_ngfw: 'NGFW',
        sec_pill_waf: 'WAF',
        sec_pill_antiddos: 'Anti-DDoS',
        sec_pill_iam: 'IAM',
        sec_pill_pam: 'PAM',
        sec_pill_zerotrust: '零信任',
        sec_pill_sast: 'SAST',
        sec_pill_dast: 'DAST',
        sec_pill_k8s: 'K8s',
        sec_pill_iso27001: 'ISO 27001',
        sec_pill_pcidss: 'PCI DSS',
        sec_pill_152fz: '152-FZ',
        sec_pill_owasp: 'OWASP',
        banking_title: '银行集成',
        banking_desc: '支付代理模式、SBP、Mir Pay、特殊账户和OFD集成。',
        bank_card1_title: '支付基础设施',
        bank_item_acquiring: '互联网收单 — Visa、Mastercard、MIR',
        bank_item_sbp: 'SBP — 二维码支付，0.4%起',
        bank_item_multi: '多收单 — 容错性',
        bank_item_recurring: '定期付款 — 订阅、SaaS',
        bank_card2_title: 'BaaS和白标',
        bank_item_baas: 'Banking as a Service — API',
        bank_item_white: '白标 — 以您的品牌',
        bank_item_cards: '发卡 — 虚拟卡和实体卡',
        bank_card3_title: '商业模式',
        bank_item_agent: '支付代理（161-FZ）',
        bank_item_split: '付款拆分',
        bank_item_escrow: '安全交易（Escrow）',
        bank_security_pci: 'PCI DSS、3D Secure、令牌化',
        bank_security_fraud: '反欺诈、评分',
        bank_security_law: '115-FZ、161-FZ、152-FZ',
        bank_card4_title: '安全与合规',
        bank_flow_in_title: '支付受理',
        bank_flow_proc_title: '处理',
        bank_flow_out_title: '安全',
        bank_baas_header: 'BaaS和白标',
        bank_baas_api: 'Banking API',
        bank_baas_white: '白标',
        bank_baas_cards: '发卡',
        bank_baas_payroll: '工资项目',
        bank_baas_wallets: '钱包',
        bank_baas_p2p: 'P2P转账',
        bank_baas_credit: '贷款',
        bank_baas_deposits: '存款',
        bank_pill_rest: 'REST API',
        bank_pill_openapi: 'Open API 3.0',
        bank_pill_webhooks: 'Webhooks',
        bank_pill_custom: '定制',
        bank_pill_mobile: '移动应用',
        bank_pill_plastic: '实体卡',
        bank_pill_cobadge: '联名卡',
        bank_pill_bulk: '批量付款',
        bank_pill_employees: '员工',
        bank_pill_contractors: '承包商',
        bank_pill_issue: '发行',
        bank_pill_topup: '充值',
        bank_pill_withdraw: '提现',
        bank_pill_instant: '即时',
        bank_pill_byphone: '手机号转账',
        bank_pill_qr: '二维码',
        bank_pill_pos: 'POS贷款',
        bank_pill_install: '分期付款',
        bank_pill_bnpl: 'BNPL',
        bank_pill_savings: '储蓄',
        bank_pill_term: '定期',
        bank_pill_deposits: '存款',
        bank_escrow_title: '安全交易',
        bank_escrow_c2c: 'C2C和B2B托管',
        bank_escrow_c2c_desc: '资金预留直到履行义务',
        bank_escrow_guarantee: '安全保障',
        bank_escrow_guarantee_desc: '保护所有参与方',
        bank_escrow_auto: '自动释放',
        bank_escrow_auto_desc: '条件达成后',
        bank_escrow_arbitrage: '仲裁',
        bank_escrow_arbitrage_desc: '争议解决',
        bank_liquidity_title: '流动性管理',
        bank_liquidity_cash: '现金管理',
        bank_liquidity_cash_desc: '整合和现金流管理',
        bank_liquidity_predict: '预测分析',
        bank_liquidity_predict_desc: '流动性需求预测',
        bank_liquidity_diversify: '多元化',
        bank_liquidity_diversify_desc: '跨银行资金分配',
        bank_liquidity_optimize: '优化',
        bank_liquidity_optimize_desc: '降低融资成本',
        bank_compliance_label: '合规与标准：',
        bank_compliance_law: '俄罗斯立法：',
        bank_compliance_payment: '支付标准：',
        bank_compliance_security: '信息安全：',
        bank_compliance_api: 'API与集成：',
        bank_tag_115fz: '115-FZ（反洗钱/打击资助恐怖主义）',
        bank_tag_161fz: '161-FZ（国家支付系统）',
        bank_tag_152fz: '152-FZ（个人数据）',
        bank_tag_187fz: '187-FZ（关键信息基础设施）',
        bank_tag_pci: 'PCI DSS Level 1',
        bank_tag_3ds: '3D Secure 2.0',
        bank_tag_token: '卡片令牌化',
        bank_tag_sbp: 'SBP（快速支付系统）',
        bank_tag_gost57580: 'GOST 57580',
        bank_tag_gost27001: 'GOST R ISO/IEC 27001',
        bank_tag_cbest: 'CBEST（测试）',
        bank_tag_openapi: 'Open API 3.0',
        bank_tag_rest: 'REST/JSON',
        bank_tag_oauth: 'OAuth 2.0',
        bank_tag_webhooks: 'Webhooks',
        projects_title: '我们的项目',
        projects_desc: '在零售、酒店和金融科技领域有50多个成功案例。',
        cases_title: '案例',
        case_loyalty_name: '多渠道忠诚度平台',
        case_loyalty_desc: '<p>iOS/Android 客户端和收银员应用</p><p>实时在线积分转账</p><p>集成 Yandex.Go, Сбербанк, Тинькофф</p><p>积分转换为 Ozon, Wildberries 优惠码</p><p>通过 СБП 银行卡提现</p><p>在 10,000+ 零售点使用积分支付</p>',
        case_blockchain_name: '私有区块链平台',
        case_blockchain_desc: '<p>基于 BigChainDB 的数据库 — 开源</p><p>多级目录系统数字清单</p><p>自动交易的智能合约</p><p>角色模型：作者、所有者、租户、买家</p><p>加密保护和外部授权</p><p>独立于外部平台</p>',
        case_blockchain: '',
        integrations_title: '我们已集成',
        case_loyalty_name: 'Программа лояльности',
        case_loyalty_name: '多渠道忠诚度平台',
        case_loyalty_desc: '<p>iOS/Android 客户端和收银员应用</p><p>实时在线积分转账</p><p>集成 Yandex.Go, Сбербанк, Тинькофф</p><p>积分转换为 Ozon, Wildberries 优惠码</p><p>通过 СБП 银行卡提现</p><p>在 10,000+ 零售点使用积分支付</p>',
        case_blockchain_name: '私有区块链平台',
        case_blockchain_desc: '<p>基于 BigChainDB 的数据库 — 开源</p><p>多级目录系统数字清单</p><p>自动交易的智能合约</p><p>角色模型：作者、所有者、租户、买家</p><p>加密保护和外部授权</p><p>独立于外部平台</p>',
        contacts_text: 'TOCH.KA 股份公司<br>税号 9723270767<br>109651, 莫斯科，佩雷尔瓦街 16 号楼 16P 室<br>+7 (911) 928-74-78<br>hello@aotochka.ru',
        int_beeline: 'Beeline',
        int_yandexgo: 'Yandex.Go',
        int_cdek: 'CDEK',
        int_tinkoff: 'Tinkoff',
        int_1c: '1C',
        int_sberbank: 'Sberbank',
        int_alfabank: 'Alfa-Bank',
        int_yoomoney: 'YooMoney',
        int_mts: 'MTS',
        int_aviasales: 'Aviasales',
        int_yandex: 'Yandex',
        int_ostrovok: 'Ostrovok.ru',
        int_sravni: 'Sravni.ru',
        int_admitad: 'Admitad',
        int_giftery: 'Giftery',
        int_advcake: 'adv.cake',
        int_xpartners: 'XPartners',
        int_fotostrana: 'Fotostrana',
        int_magnit: 'Magnit',
        int_lenta: 'Lenta',
        int_auchan: 'Auchan',
        int_metro: 'Metro',
        int_globus: 'Globus',
        int_superbabilon: 'SuperBabylon',
        footer_copyright: '© 2025 TOCH.KA',
        footer_rights: '版权所有'
    },
    es: {
        menu_hero: 'Inicio',
        menu_technologies: 'Tecnologías',
        menu_security: 'Seguridad',
        menu_banking: 'Banca',
        menu_projects: 'Proyectos',
        menu_cases: 'Casos',
        menu_contacts: 'Contactos',
                menu_company: 'TOCH.KA Soluciones Tecnológicas',
        menu_footer: 'Pie de página',
        hero_line1: 'TOCH.KA',
        hero_line2: 'Socio Tecnológico',
        hero_line3: 'Fintech y Pagos para Pequeños Negocios',
        tech_title: 'Tecnologías',
        security_title: 'Seguridad',
        security_desc: 'Almacenamiento de datos en Rusia, cifrado de extremo a extremo, pentests regulares y protección WAF.',
        sec_card1_title: 'Protección del Perímetro',
        sec_card1_problem: 'DDoS, intrusiones, bots',
        sec_card1_solution: 'Monitoreo continuo del perímetro (EASM). Detección de vulnerabilidades antes de la explotación.',
        sec_card2_title: 'Desarrollo Seguro',
        sec_card2_problem: 'Errores de código, fugas de entornos de prueba, herramientas de TI en la sombra.',
        sec_card2_solution: 'Verificaciones automatizadas de seguridad en CI/CD, aislamiento de datos de prueba.',
        sec_card3_title: 'Respuesta a Incidentes 24/7',
        sec_card3_solution: 'Monitoreo de incidentes y investigación de ciberdelitos las 24 horas.',
        sec_card4_title: 'Tecnologías y Estándares',
        sec_toggle_problem: 'Problema',
        sec_cat_monitoring: 'Monitoreo',
        sec_cat_perimeter: 'Perímetro',
        sec_cat_access: 'Acceso',
        sec_cat_dev: 'DevSecOps',
        sec_cat_standards: 'Estándares',
        sec_pill_siem: 'SIEM',
        sec_pill_edr: 'EDR/XDR',
        sec_pill_nta: 'NTA/NDR',
        sec_pill_ngfw: 'NGFW',
        sec_pill_waf: 'WAF',
        sec_pill_antiddos: 'Anti-DDoS',
        sec_pill_iam: 'IAM',
        sec_pill_pam: 'PAM',
        sec_pill_zerotrust: 'Zero Trust',
        sec_pill_sast: 'SAST',
        sec_pill_dast: 'DAST',
        sec_pill_k8s: 'K8s',
        sec_pill_iso27001: 'ISO 27001',
        sec_pill_pcidss: 'PCI DSS',
        sec_pill_152fz: '152-FZ',
        sec_pill_owasp: 'OWASP',
        banking_title: 'Integraciones Bancarias',
        banking_desc: 'Modelo de agente de pago, SBP, Mir Pay, cuentas especiales e integración con OFD.',
        bank_card1_title: 'Infraestructura de Pagos',
        bank_item_acquiring: 'Adquisición por Internet — Visa, Mastercard, MIR',
        bank_item_sbp: 'SBP — pagos por código QR, desde 0.4%',
        bank_item_multi: 'Multi-adquisición — tolerancia a fallos',
        bank_item_recurring: 'Pagos recurrentes — suscripciones, SaaS',
        bank_card2_title: 'BaaS y Marca Blanca',
        bank_item_baas: 'Banking as a Service — API',
        bank_item_white: 'Marca blanca — bajo su marca',
        bank_item_cards: 'Emisión de tarjetas — virtuales y plásticas',
        bank_card3_title: 'Modelos de Negocio',
        bank_item_agent: 'Agente de pago (161-FZ)',
        bank_item_split: 'División de pagos',
        bank_item_escrow: 'Transacciones seguras (Escrow)',
        bank_security_pci: 'PCI DSS, 3D Secure, tokenización',
        bank_security_fraud: 'Antifraude, scoring',
        bank_security_law: '115-FZ, 161-FZ, 152-FZ',
        bank_card4_title: 'Seguridad y Cumplimiento',
        bank_flow_in_title: 'Aceptación de Pagos',
        bank_flow_proc_title: 'Procesamiento',
        bank_flow_out_title: 'Seguridad',
        bank_baas_header: 'BaaS y Marca Blanca',
        bank_baas_api: 'Banking API',
        bank_baas_white: 'Marca Blanca',
        bank_baas_cards: 'Emisión de Tarjetas',
        bank_baas_payroll: 'Proyectos de Nómina',
        bank_baas_wallets: 'Billeteras',
        bank_baas_p2p: 'Transferencias P2P',
        bank_baas_credit: 'Préstamos',
        bank_baas_deposits: 'Depósitos',
        bank_pill_rest: 'REST API',
        bank_pill_openapi: 'Open API 3.0',
        bank_pill_webhooks: 'Webhooks',
        bank_pill_custom: 'Personalización',
        bank_pill_mobile: 'App Móvil',
        bank_pill_plastic: 'Plásticas',
        bank_pill_cobadge: 'Cobadge',
        bank_pill_bulk: 'Pagos Masivos',
        bank_pill_employees: 'Empleados',
        bank_pill_contractors: 'Contratistas',
        bank_pill_issue: 'Emisión',
        bank_pill_topup: 'Recarga',
        bank_pill_withdraw: 'Retiro',
        bank_pill_instant: 'Instantáneas',
        bank_pill_byphone: 'Por Teléfono',
        bank_pill_qr: 'Código QR',
        bank_pill_pos: 'Préstamos POS',
        bank_pill_install: 'Plazos',
        bank_pill_bnpl: 'BNPL',
        bank_pill_savings: 'Ahorro',
        bank_pill_term: 'Plazo',
        bank_pill_deposits: 'Depósitos',
        bank_escrow_title: 'Transacciones Seguras',
        bank_escrow_c2c: 'Escrow para C2C y B2B',
        bank_escrow_c2c_desc: 'reserva de fondos hasta el cumplimiento de obligaciones',
        bank_escrow_guarantee: 'Garantía de Seguridad',
        bank_escrow_guarantee_desc: 'protección para todas las partes',
        bank_escrow_auto: 'Liberación Automática',
        bank_escrow_auto_desc: 'al cumplir las condiciones',
        bank_escrow_arbitrage: 'Arbitraje',
        bank_escrow_arbitrage_desc: 'resolución de disputas',
        bank_liquidity_title: 'Gestión de Liquidez',
        bank_liquidity_cash: 'Cash Management',
        bank_liquidity_cash_desc: 'consolidación y gestión de flujos de efectivo',
        bank_liquidity_predict: 'Analítica Predictiva',
        bank_liquidity_predict_desc: 'pronóstico de necesidades de liquidez',
        bank_liquidity_diversify: 'Diversificación',
        bank_liquidity_diversify_desc: 'distribución de financiación entre bancos',
        bank_liquidity_optimize: 'Optimización',
        bank_liquidity_optimize_desc: 'reducción de costos de financiación',
        bank_compliance_label: 'Cumplimiento y Estándares:',
        bank_compliance_law: 'Legislación Rusa:',
        bank_compliance_payment: 'Estándares de Pago:',
        bank_compliance_security: 'Seguridad de la Información:',
        bank_compliance_api: 'API e Integraciones:',
        bank_tag_115fz: '115-FZ (AML/CFT)',
        bank_tag_161fz: '161-FZ (NPS)',
        bank_tag_152fz: '152-FZ (PDn)',
        bank_tag_187fz: '187-FZ (CII)',
        bank_tag_pci: 'PCI DSS Level 1',
        bank_tag_3ds: '3D Secure 2.0',
        bank_tag_token: 'Tokenización de Tarjetas',
        bank_tag_sbp: 'SBP (Sistema de Pagos Rápidos)',
        bank_tag_gost57580: 'GOST 57580',
        bank_tag_gost27001: 'GOST R ISO/IEC 27001',
        bank_tag_cbest: 'CBEST (pruebas)',
        bank_tag_openapi: 'Open API 3.0',
        bank_tag_rest: 'REST/JSON',
        bank_tag_oauth: 'OAuth 2.0',
        bank_tag_webhooks: 'Webhooks',
        projects_title: 'Nuestros Proyectos',
        projects_desc: 'Más de 50 implementaciones exitosas en retail, HoReCa y fintech.',
        cases_title: 'Casos',
        case_loyalty_name: 'Plataforma de Fidelización Multicanal',
        case_loyalty_desc: '<p>Aplicaciones iOS/Android para clientes y cajeros</p><p>Transferencias de puntos en línea en tiempo real</p><p>Integración con Yandex.Go, Sberbank, Tinkoff</p><p>Conversión de puntos a códigos promocionales Ozon, Wildberries</p><p>Retiro a tarjeta bancaria vía SBP</p><p>Pago con puntos en más de 10 000 puntos de venta</p>',
        case_blockchain_name: 'Plataforma de Blockchain Privada',
        case_blockchain_desc: '<p>Base de datos en BigChainDB — código abierto</p><p>Inventario digital con sistema de catálogo multinivel</p><p>Contratos inteligentes para transacciones automáticas</p><p>Modelo de roles: autor, propietario, inquilino, comprador</p><p>Protección criptográfica y autorización externa</p><p>Independencia de plataformas externas</p>',
        case_blockchain: '',
        integrations_title: 'Hemos integrado',
        case_loyalty_name: 'Программа лояльности',
        case_loyalty_name: 'Plataforma de Fidelización Multicanal',
        case_loyalty_desc: '<p>Aplicaciones iOS/Android para clientes y cajeros</p><p>Transferencias de puntos en línea en tiempo real</p><p>Integración con Yandex.Go, Sberbank, Tinkoff</p><p>Conversión de puntos a códigos promocionales Ozon, Wildberries</p><p>Retiro a tarjeta bancaria vía SBP</p><p>Pago con puntos en más de 10 000 puntos de venta</p>',
        case_blockchain_name: 'Plataforma de Blockchain Privada',
        case_blockchain_desc: '<p>Base de datos en BigChainDB — código abierto</p><p>Inventario digital con sistema de catálogo multinivel</p><p>Contratos inteligentes para transacciones automáticas</p><p>Modelo de roles: autor, propietario, inquilino, comprador</p><p>Protección criptográfica y autorización externa</p><p>Independencia de plataformas externas</p>',
        contacts_text: 'TOCH.KA S.A.<br>NIF 9723270767<br>109651, Moscú, Calle Pererva, 16, Edificio 16P<br>+7 (911) 928-74-78<br>hello@aotochka.ru',
        int_beeline: 'Beeline',
        int_yandexgo: 'Yandex.Go',
        int_cdek: 'CDEK',
        int_tinkoff: 'Tinkoff',
        int_1c: '1C',
        int_sberbank: 'Sberbank',
        int_alfabank: 'Alfa-Bank',
        int_yoomoney: 'YooMoney',
        int_mts: 'MTS',
        int_aviasales: 'Aviasales',
        int_yandex: 'Yandex',
        int_ostrovok: 'Ostrovok.ru',
        int_sravni: 'Sravni.ru',
        int_admitad: 'Admitad',
        int_giftery: 'Giftery',
        int_advcake: 'adv.cake',
        int_xpartners: 'XPartners',
        int_fotostrana: 'Fotostrana',
        int_magnit: 'Magnit',
        int_lenta: 'Lenta',
        int_auchan: 'Auchan',
        int_metro: 'Metro',
        int_globus: 'Globus',
        int_superbabilon: 'SuperBabylon',
        footer_copyright: '© 2025 TOCH.KA',
        footer_rights: 'Todos los derechos reservados'
    },
    jp: {
        menu_hero: 'ホーム',
        menu_technologies: '技術',
        menu_security: 'セキュリティ',
        menu_banking: '銀行',
        menu_projects: 'プロジェクト',
        menu_cases: '事例',
        menu_contacts: 'お問い合わせ',
                menu_company: 'TOCH.KA テクノロジーソリューション',
        menu_footer: 'フッター',
        hero_line1: 'TOCH.KA',
        hero_line2: 'テクノロジーパートナー',
        hero_line3: '中小企業のフィンテックと決済',
        tech_title: '技術',
        security_title: 'セキュリティ',
        security_desc: 'ロシアでのデータ保存、エンドツーエンド暗号化、定期的なペネトレーションテスト、WAF保護。',
        sec_card1_title: '境界保護',
        sec_card1_problem: 'DDoS、侵入、ボット',
        sec_card1_solution: '継続的な境界監視（EASM）。悪用前の脆弱性検出。',
        sec_card2_title: 'セキュア開発',
        sec_card2_problem: 'コードエラー、テスト環境の漏洩、シャドーITツール。',
        sec_card2_solution: 'CI/CDでの自動セキュリティチェック、テストデータの分離。',
        sec_card3_title: '24/7インシデント対応',
        sec_card3_solution: 'インシデントの24時間監視とサイバー犯罪の調査。',
        sec_card4_title: '技術と標準',
        sec_toggle_problem: '問題',
        sec_cat_monitoring: '監視',
        sec_cat_perimeter: '境界',
        sec_cat_access: 'アクセス',
        sec_cat_dev: 'DevSecOps',
        sec_cat_standards: '標準',
        sec_pill_siem: 'SIEM',
        sec_pill_edr: 'EDR/XDR',
        sec_pill_nta: 'NTA/NDR',
        sec_pill_ngfw: 'NGFW',
        sec_pill_waf: 'WAF',
        sec_pill_antiddos: 'Anti-DDoS',
        sec_pill_iam: 'IAM',
        sec_pill_pam: 'PAM',
        sec_pill_zerotrust: 'ゼロトラスト',
        sec_pill_sast: 'SAST',
        sec_pill_dast: 'DAST',
        sec_pill_k8s: 'K8s',
        sec_pill_iso27001: 'ISO 27001',
        sec_pill_pcidss: 'PCI DSS',
        sec_pill_152fz: '152-FZ',
        sec_pill_owasp: 'OWASP',
        banking_title: '銀行統合',
        banking_desc: '決済代行モデル、SBP、Mir Pay、特別口座、OFD統合。',
        bank_card1_title: '決済インフラ',
        bank_item_acquiring: 'インターネット決済 — Visa、Mastercard、MIR',
        bank_item_sbp: 'SBP — QRコード決済、0.4%から',
        bank_item_multi: 'マルチアクワイアリング — 耐障害性',
        bank_item_recurring: '定期決済 — サブスクリプション、SaaS',
        bank_card2_title: 'BaaS＆ホワイトレーベル',
        bank_item_baas: 'Banking as a Service — API',
        bank_item_white: 'ホワイトレーベル — あなたのブランドで',
        bank_item_cards: 'カード発行 — バーチャルとプラスチック',
        bank_card3_title: 'ビジネスモデル',
        bank_item_agent: '決済代行（161-FZ）',
        bank_item_split: '決済分割',
        bank_item_escrow: '安全な取引（Escrow）',
        bank_security_pci: 'PCI DSS、3D Secure、トークン化',
        bank_security_fraud: '詐欺対策、スコアリング',
        bank_security_law: '115-FZ、161-FZ、152-FZ',
        bank_card4_title: 'セキュリティとコンプライアンス',
        bank_flow_in_title: '決済受付',
        bank_flow_proc_title: '処理',
        bank_flow_out_title: 'セキュリティ',
        bank_baas_header: 'BaaS＆ホワイトレーベル',
        bank_baas_api: 'Banking API',
        bank_baas_white: 'ホワイトレーベル',
        bank_baas_cards: 'カード発行',
        bank_baas_payroll: '給与プロジェクト',
        bank_baas_wallets: 'ウォレット',
        bank_baas_p2p: 'P2P送金',
        bank_baas_credit: '融資',
        bank_baas_deposits: '預金',
        bank_pill_rest: 'REST API',
        bank_pill_openapi: 'Open API 3.0',
        bank_pill_webhooks: 'Webhooks',
        bank_pill_custom: 'カスタマイズ',
        bank_pill_mobile: 'モバイルアプリ',
        bank_pill_plastic: 'プラスチック',
        bank_pill_cobadge: 'コバッジ',
        bank_pill_bulk: '一括支払い',
        bank_pill_employees: '従業員',
        bank_pill_contractors: '請負業者',
        bank_pill_issue: '発行',
        bank_pill_topup: 'チャージ',
        bank_pill_withdraw: '出金',
        bank_pill_instant: '即時',
        bank_pill_byphone: '電話番号で',
        bank_pill_qr: 'QRコード',
        bank_pill_pos: 'POSローン',
        bank_pill_install: '分割払い',
        bank_pill_bnpl: 'BNPL',
        bank_pill_savings: '貯蓄',
        bank_pill_term: '定期',
        bank_pill_deposits: '預金',
        bank_escrow_title: '安全な取引',
        bank_escrow_c2c: 'C2C＆B2Bエスクロー',
        bank_escrow_c2c_desc: '義務履行まで資金を留保',
        bank_escrow_guarantee: '安全保証',
        bank_escrow_guarantee_desc: 'すべての当事者を保護',
        bank_escrow_auto: '自動解放',
        bank_escrow_auto_desc: '条件達成時に',
        bank_escrow_arbitrage: '仲裁',
        bank_escrow_arbitrage_desc: '紛争解決',
        bank_liquidity_title: '流動性管理',
        bank_liquidity_cash: 'キャッシュマネジメント',
        bank_liquidity_cash_desc: '現金フローの統合と管理',
        bank_liquidity_predict: '予測分析',
        bank_liquidity_predict_desc: '流動性需要の予測',
        bank_liquidity_diversify: '多様化',
        bank_liquidity_diversify_desc: '銀行間での資金配分',
        bank_liquidity_optimize: '最適化',
        bank_liquidity_optimize_desc: '資金調達コストの削減',
        bank_compliance_label: 'コンプライアンスと標準：',
        bank_compliance_law: 'ロシア法規制：',
        bank_compliance_payment: '決済標準：',
        bank_compliance_security: '情報セキュリティ：',
        bank_compliance_api: 'APIと統合：',
        bank_tag_115fz: '115-FZ（AML/CFT）',
        bank_tag_161fz: '161-FZ（国家決済システム）',
        bank_tag_152fz: '152-FZ（個人データ）',
        bank_tag_187fz: '187-FZ（重要情報インフラ）',
        bank_tag_pci: 'PCI DSS Level 1',
        bank_tag_3ds: '3D Secure 2.0',
        bank_tag_token: 'カードトークン化',
        bank_tag_sbp: 'SBP（即時決済システム）',
        bank_tag_gost57580: 'GOST 57580',
        bank_tag_gost27001: 'GOST R ISO/IEC 27001',
        bank_tag_cbest: 'CBEST（テスト）',
        bank_tag_openapi: 'Open API 3.0',
        bank_tag_rest: 'REST/JSON',
        bank_tag_oauth: 'OAuth 2.0',
        cases_title: '事例',
        case_loyalty_name: 'マルチチャネルロイヤルティプラットフォーム',
        case_loyalty_desc: '<p>iOS/Android クライアント・レジ担当者向けアプリ</p><p>リアルタイムオンライーポイント移行</p><p>Yandex.Go、Sberbank、Tinkoff 統合</p><p>ポイントをOzon、Wildberries promo codeに変換</p><p>SBP経由で银行卡出金</p><p>10,000+ 店舗でポイント支払い</p>',
        case_blockchain_name: 'プライベートブロックチェーンプラットフォーム',
        case_blockchain_desc: '<p>BigChainDB 上のデータベース — オープンソース</p><p>マルチレベルカタログシステム付きデジタルインベントリ</p><p>自動取引のためのスマートコントラクト</p><p>ロールモデル：著者、オーナー、テナント、バイヤー</p><p>暗号保護と外部認証</p><p>外部プラットフォームから独立</p>',
        integrations_title: '統合済み',
        int_beeline: 'Beeline',
        int_yandexgo: 'Yandex.Go',
        int_cdek: 'CDEK',
        int_tinkoff: 'Tinkoff',
        int_1c: '1C',
        int_sberbank: 'Sberbank',
        int_alfabank: 'Alfa-Bank',
        int_yoomoney: 'YooMoney',
        int_mts: 'MTS',
        int_aviasales: 'Aviasales',
        int_yandex: 'Yandex',
        int_ostrovok: 'Ostrovok.ru',
        int_sravni: 'Sravni.ru',
        int_admitad: 'Admitad',
        int_giftery: 'Giftery',
        int_advcake: 'adv.cake',
        int_xpartners: 'XPartners',
        int_fotostrana: 'Fotostrana',
        int_magnit: 'Magnit',
        int_lenta: 'Lenta',
        int_auchan: 'Auchan',
        int_metro: 'Metro',
        int_globus: 'Globus',
        int_superbabilon: 'SuperBabylon',
        footer_copyright: '© 2025 TOCH.KA',
        footer_rights: '全著作権所有'
    }
};

// ==================== ДАННЫЕ ДЛЯ КАРТОЧЕК ТЕХНОЛОГИЙ ====================
const techData = {
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

// ==================== SVG ИКОНКИ ДЛЯ ПРОЕКТОВ ====================
const projectIcons = {
    store: '<svg viewBox="0 0 24 24"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/></svg>',
    gift: '<svg viewBox="0 0 24 24"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/></svg>',
    mobile: '<svg viewBox="0 0 24 24"><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg>',
    plug: '<svg viewBox="0 0 24 24"><path d="M16 1H8C6.34 1 5 2.34 5 4v6h14V4c0-1.66-1.34-3-3-3zm-1 9h-2V4h2v6zM5 12v7c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3v-7H5zm6 8H9v-6h2v6zm4 0h-2v-6h2v6z"/></svg>',
    chart: '<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>',
    cog: '<svg viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L3.16 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>',
    users: '<svg viewBox="0 0 24 24"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>',
    bullhorn: '<svg viewBox="0 0 24 24"><path d="M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 4.61c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.39zM4 9v2h4.04c-.07-.34-.04-.71.05-1.06.09-.36.25-.69.48-.97L8.59 9H4zm9-5.65V3h-2v2h.61l.39.65V3.35zM11 21h2v-4.34l-.39.65H11V21zM4.65 13H3v2h2v-.65l-.35-.35zM6.35 7.45l-1.1-1.1-.7.7 1.1 1.1.7-.7zM15.55 6.34l1.1-1.11-.71-.7-1.09 1.1.7.71zM17.65 13.82l.71.7 1.1-1.1-.71-.7-1.1 1.1z"/></svg>',
    truck: '<svg viewBox="0 0 24 24"><path d="M18 18.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zM19.5 9.5L21.46 12H17V9.5h2.5zM6 18.5c.83 0 1.5-.67 1.5-1.5S6.83 15.5 6 15.5 4.5 16.17 4.5 17s.67 1.5 1.5 1.5zM20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4z"/></svg>',
    shield: '<svg viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>',
    bank: '<svg viewBox="0 0 24 24"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-1-9L2 6v2h19V6l-9-5z"/></svg>',
    tag: '<svg viewBox="0 0 24 24"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/></svg>',
    file: '<svg viewBox="0 0 24 24"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>',
    sitemap: '<svg viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>',
    ad: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>',
    tags: '<svg viewBox="0 0 24 24"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm15.09 8.68l-2.54 2.53-.71-.71c-.39-.39-1.02-.39-1.41 0l-.71.71-3.54-3.54.71-.71c.39-.39.39-1.02 0-1.41l-.71-.71 2.54-2.54c.39-.39 1.02-.39 1.41 0l2.83 2.83c.39.39.39 1.02 0 1.41z"/></svg>'
};

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
            if (key.includes('_desc') || key === 'contacts_text') {
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

// Ждём загрузки GSAP (с защитой от ошибок)
function initGSAPPlugins() {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger, TextPlugin);
    } else {
        // Повторяем через 100ms если GSAP ещё не загружен
        setTimeout(initGSAPPlugins, 100);
    }
}

// Запускаем с небольшой задержкой
initGSAPPlugins();

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
