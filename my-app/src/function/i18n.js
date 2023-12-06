import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "ua",
    whitelist: ["ua", "en"],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["path", "navigator"],
      lookupFromPathIndex: 0, // Індекс мови в шляху (0 - перший шляховий сегмент)
    },
    resources: {
      en: {
        translation: {
          description: {
            part1: {
              mainPage: {
                mainTitle: "Website development services",
                mainButSend: "Write to us",
                conForm: "Contact form",
                mainButStart: "Start",
                mainOurServ: "Our services",
                landTitle: "Landing page",
                lendDesc:
                  "Landing page with progressive design and good functionality.",
                businesTitile: "Business website",
                businesDesc:
                  "A website for your business with maximum implementation of your needs.",
                onlineTitile: "Online store",
                onlineDesc:
                  "We will create your ideal platform for online sales.",
                crmInterTitile: "CRM integration",
                crmInterDesc:
                  "CRM Integration: Optimize Your Business Faster and More Efficiently.",
                designTitile: "Progressive design",
                designDesc:
                  "Our design team will develop a unique design for your brand",

                optimizaTitile: "Web Applications",
                optimizaDesc:
                  "Convenient web applications for efficient online use.",
                aboutUsTitle: "About us",
                aboutFirstTitle: "Experience",
                aboutFirst:
                  "We are a team of professionals focused on the maximum result for the client. We strive to create not just impressive, but the most useful and effective things. We work for results, because the success of our clients is our success!",
                aboutSecondTitle: "Technologies",
                aboutSecond:
                  "We use advanced technologies in development. Thanks to this, your web application will be as fast as possible and visually attractive to the user. You can view the list of technologies below.",
                aboutThreTitle: "Communication",
                aboutThre:
                  "We are fully open to any client's needs. Communication with the client takes place at all stages of development to achieve the maximum result. The motto of our company is a satisfied client, we are satisfied.",
                tech: "Technologies",
                write: "Get in touch whis us",
                vul: "Lvivska Street",
                ind: "78560 Lviv",
                count: "Ukraine",
                phone: "Phone",
                name: "Name",
                mail: "Address",
                phoneForm: "Phone",
                tem: "Subject",
                mess: "Message",
                buttSendMes: "SEND MESSAGE",
                headerMain: "Home",
                headerAbout: "About us",
                headerServ: "Services",
                blg: "Blog",
                headerContact: "Contact",
                fourFo: "Sorry, but this page does not exist.",
                returnTo: "Back to Home",
                footer: "Site map",
              },
              footer: {
                h1: "Site Map",
                main: "Home",
                mainEn: "English Version",
                mainUk: "Ukrainian Version",
                serv: "Services",
                landi: "One-page Websites",
                bussin: "Business Website",
                store: "Online Store",
                app: "Web Applications",
                crm: "CRM Systems",
                constact: "Contacts",
                about: "About Us",
                blog: "Blog",
                sitemap: "Site Map",
              },
              services: {
                title: "Services",
                offer: "Services We Offer",
                firstOfferName: "Landing page",
                firstOfferDesc:
                  "Crafting captivating landing pages to engage your audience and boost sales.",
                secondOfferName: "Business website",
                secondOfferDesc:
                  "Crafting high-impact websites for your business needs.",
                threOfferName: "Online store",
                threOfferDesc:
                  "Crafting high-performing e-commerce solutions tailored to your needs.",
                fourOfferName: "Web App Development",
                fourOfferDesc:
                  "Expert Web App Development Services: Tailored Digital Solutions for Your Business.",

                sixOfferName: "Web Application Design",
                sixOfferDesc:
                  "Professional web application design services: Customized digital solutions for your business.",
                fiveOfferName: "CRM Integration",
                fiveOfferDesc:
                  "Effortless CRM and Software Integration Solutions for Streamlined Operations",
                readMor: "Read More",
                firstQuestion:
                  "What are the main stages of website development?",
                firstAnsver:
                  "The stages of website development include requirements analysis, design, development, testing, and launch. After that, ongoing support and updates are necessary.",
                secondQuestion: "What is responsive design?",
                secondAnsver:
                  "Responsive design is an approach to website development that makes it suitable for display on various devices and screen sizes, such as computers, tablets, and smartphones.",

                threQuestion:
                  "How much time is typically required for website development?",
                threAnsver:
                  "The time required for website development depends on the complexity of the project. A simple landing page can be developed in a few weeks, while a complex web portal may take several months.",

                fourQuestion:
                  "What are the main factors that influence the cost of website development?",
                fourAnsver:
                  "The cost of website development depends on the complexity of the project, the scope of work, design, and functional requirements.",
                fiveQuestion: "What are the current trends in web development?",
                fiveAnsver:
                  "Current trends include responsive design, page loading speed, the use of microinteractions, the implementation of artificial intelligence, and the Internet of Things in websites.",
                sixQuestion:
                  "What is hosting, and why is it important for a website?",
                sixAnsver:
                  "Hosting is a service that allows you to place a website on a server so that it is accessible on the Internet. Choosing reliable hosting is important for website speed and data security.",
                queTitle: "Frequently Asked Questions",
                contactUs: "Get In Totch With Us",
                pContact:
                  "We are ready to answer your questions and provide additional information. Feel free to reach out to us.",
                buttonFor: "Contact us",
                auto: "Fleet",
                serv: "Services",
                about: "About Us",
                inf: "Contact",
              },
              landing: {
                title: "Landing page development services",
                listOfSerc: "List Of Services",
                firstTitle:
                  "Welcome to the World of High-Converting Landing Pages!",
                firstDesc:
                  "Notable fact: First impressions matter. In the realm of internet marketing, a landing page serves as your virtual storefront. On our page, you'll discover why landing page development is the first step toward your online business's success.",
                secondTitle: "What Is a Landing Page, and Why Is It Important?",
                secondDesc:
                  "A landing page is a single-page website designed with one purpose - to persuade visitors to take a specific action. Whether you're selling products, services, or simply collecting contact information, a landing page will help you achieve your goal.",
                threTitle: "Our Landing Page Development Service",
                threDesc:
                  "Our team of professionals has extensive experience in developing landing pages of varying complexity. We offer:",
                threFirst:
                  "Unique design creation: Your landing page will stand out among competitors and leave a lasting impression.",
                threSecond:
                  "Conversion optimization: We know how to make your landing page appealing to your customers and increase conversion rates.",
                threThre:
                  "Analytics and refinement: We consider the results and continually optimize your landing page for the best outcomes.",
                fourTitle: "Why Choose Us?",
                fourDesc:
                  "Наша команда професіоналів має багаторічний досвід у розробці лендінгів різної складності. Ми пропонуємо:",
                fourFirst:
                  "Experience and expertise: We know how to create effective landing pages.",
                fourSecond:
                  "Individualized approach: We assess each project individually, considering your needs.",
                fourThre:
                  "Results-oriented: We work towards outcomes and always align with your goals.",
              },
              bussines: {
                title: "Business website development",
                listOfSerc: "List Of Services",
                firstTitle:
                  "Welcome to the World of High-Performing Business Websites!",
                firstDesc:
                  "It's a well-known fact: first impressions matter. In the realm of internet marketing, your business website serves as your virtual storefront. On our page, you'll discover why business website development is the first step towards success in your online business.",
                secondTitle:
                  "What Is a Business Website, and Why Is It Important?",
                secondDesc:
                  "A business website is a multi-page online platform created with the purpose of representing your brand and driving your business goals. Whether you're selling products, services, or aiming to establish a strong online presence, a business website is crucial.",
                threTitle: "Our Business Website Development Service",
                threDesc:
                  "Our team of professionals boasts extensive experience in developing business websites of varying complexity. We offer:",
                threFirst:
                  "Creation of a unique design: Your business website will stand out among competitors and leave a lasting impression.",
                threSecond:
                  "Conversion optimization: We know how to make your website appealing to your customers and increase conversion rates.",
                threThre:
                  "Analytics and refinement: We consider the results and continually optimize your website for the best outcomes.",
                fourTitle: "Who Is This Service For?",
                fourDesc:
                  "Наша команда професіоналів має багаторічний досвід у розробці лендінгів різної складності. Ми пропонуємо:",
                fourFirst:
                  "Entrepreneurs and startups planning to establish or enhance their online presence.",
                fourSecond:
                  "Business owners looking to expand their reach, boost sales, and engage with new customers.",
                fourThre:
                  "Marketing agencies seeking a reliable partner in web development.",
              },
              store: {
                title: "Custom e-commerce website development",
                listOfSerc: "List Of Services",
                firstTitle: "Welcome to the World of Profitable Online Stores!",
                firstDesc:
                  "Well-known fact: first impressions matter. In the world of e-commerce, your online store serves as your virtual storefront. On our page, you'll discover why e-commerce website development is the first step to success for your online business.",
                secondTitle:
                  "What is an Online Store, and Why Is It Important?",
                secondDesc:
                  "An online store is an electronic marketplace designed for convenient and profitable online sales. Whether you're selling products, services, or aiming to expand your customer base, an online store will help you achieve your goals.",
                threTitle: "Our E-commerce Development Service",
                threDesc:
                  "Our team of professionals has extensive experience in creating various types of online stores. We offer:",
                threFirst:
                  "Unique Design Creation: Your online store will stand out among competitors and leave a lasting impression.",
                threSecond:
                  "Conversion optimization: We know how to make your website appealing to your customers and increase conversion rates.",
                threThre:
                  "Analytics and Enhancement: We analyze results and continually optimize your online store for the best outcomes.",
                fourTitle: "Who Is This Service For?",
                fourDesc:
                  "Наша команда професіоналів має багаторічний досвід у розробці лендінгів різної складності. Ми пропонуємо:",
                fourFirst:
                  "Entrepreneurs and startups planning to launch new products or services.",
                fourSecond:
                  "Business owners looking to boost sales and attract new customers.",
                fourThre:
                  "Marketing agencies in search of a reliable web development partner.",
              },
              web: {
                title: "Mobile app development services",
                listOfSerc: "List Of Services",
                firstTitle:
                  "Welcome to the World of Convertible Web Applications!",
                firstDesc:
                  "Well-known fact: first impressions matter. In the world of internet marketing, a web application serves as your virtual storefront. On our page, you'll discover why web application development is the first step to success for your online business.",
                secondTitle:
                  "What Are Web Applications, and Why Are They Important?",
                secondDesc:
                  "A web application is an interactive online resource created to address specific tasks. Whether you plan to automate business processes, establish an online store, or enhance customer engagement, a web application will help you achieve your goal.",
                threTitle: "Our Web Application Development Service",
                threDesc:
                  "Our team of professionals boasts years of experience in developing web applications of varying complexity. We offer:",
                threFirst:
                  "Crafting a unique design: Your web application will stand out among competitors, leaving a memorable impression.",
                threSecond:
                  "User-friendliness optimization: We know how to make your web application user-friendly and appealing to your audience.",
                threThre:
                  "Analytics and continuous improvement: We take results into account and consistently optimize your web application for the best outcomes.",
                fourTitle: "Who Is This Service For?",
                fourDesc:
                  "Our web application development service is designed for:",
                fourFirst:
                  "Entrepreneurs and startups with ideas for online projects.",
                fourSecond:
                  "Business owners looking to expand their online presence and enhance operational efficiency.",
                fourThre:
                  "Marketing agencies seeking a reliable partner for web application development.",
              },
              crm: {
                title: "CRM integration",
                listOfSerc: "List Of Services",
                firstTitle: "Welcome to the World of CRM Integration!",
                firstDesc:
                  "It's a well-known fact: first impressions matter. In the realm of digital business, CRM integration serves as your virtual gateway. On our page, you'll discover why CRM integration implementation is the first step to success for your online business.",
                secondTitle:
                  "What Is CRM Integration, and Why Is It Important?",
                secondDesc:
                  "CRM integration involves merging customer relationship management systems with your business processes to enhance efficiency. Whether you're managing customer interactions, streamlining sales, or optimizing marketing strategies, CRM integration helps you achieve your objectives.",
                threTitle: "Our CRM Integration Implementation Service",
                threDesc:
                  "Our team of professionals boasts years of experience in implementing CRM integrations of varying complexity. We offer:",
                threFirst:
                  "Tailored solutions: Your CRM integration will be customized to meet your unique business needs, ensuring a seamless experience.",
                threSecond:
                  "Integration optimization: We know how to make your CRM integration attractive and efficient for your clients, boosting productivity.",
                threThre:
                  "Analytics and continuous improvement: We evaluate results and continually optimize your CRM integration for the best outcomes.",
                fourTitle: "Who Is This Service For?",
                fourDesc:
                  "Our web application development service is designed for:",
                fourFirst:
                  "Entrepreneurs and startups looking to streamline customer management.",
                fourSecond:
                  "Business owners seeking to improve sales, customer engagement, and efficiency.",
                fourThre:
                  "Marketing agencies in search of a reliable partner for CRM integration.",
              },
              design: {
                title: "Custom website design",
                listOfSerc: "List of Services",
                firstTitle: "Welcome to the World of Website Design!",
                firstDesc:
                  "It's a well-known fact: the first impression matters. In the world of online business, website design serves as your virtual entrance. On our page, you will learn why creating a website design is the first step to the success of your online project.",
                secondTitle: "What is Website Design and Why is it Important?",
                secondDesc:
                  "Website design involves creating an aesthetically pleasing and functional interface to ensure a positive user experience. Whether you are developing a personal website, a corporate portal, or an online store, design plays a crucial role in interacting with your audience.",
                threTitle: "Our Website Design Development Service",
                threDesc:
                  "Our team of professionals has extensive experience in developing website designs of various complexities. We offer services for:",
                threFirst:
                  "Individual Solutions: Your website design will be tailored to meet the unique needs of your project, providing a seamless interface.",
                threSecond:
                  "Design Optimization: We know how to make your website attractive and effective for your visitors, increasing engagement.",
                threThre:
                  "Analytics and Continuous Improvement: We evaluate results and continually optimize your website design for the best outcomes.",
                fourTitle: "Who is This Service For?",
                fourDesc:
                  "Our team of professionals has extensive experience in developing website designs of various complexities. We offer services for:",
                fourFirst:
                  "Entrepreneurs and startups aiming to create an effective virtual tool for their business.",
                fourSecond:
                  "Business owners looking to improve their online presence and impress their audience.",
                fourThre:
                  "Marketing agencies seeking a reliable partner for the development of innovative web projects.",
              },
              aboutUs: {
                title: "The history of the web studio WebUi-Studio",
                firstText:
                  "We are the creators of innovative and impressive web solutions that propel your business forward and make it more accessible in the online world. Our team of dedicated professionals boasts years of experience in website and app development, giving us the confidence to deliver exceptional results for you.",
                secondTitle: "Our goal",
                secondDesc:
                  "We believe that the online space is not just the internet; it's an opportunity to establish a digital presence for your brand, where every customer can experience your uniqueness and professionalism. We strive to understand your needs and goals and then transform them into creative and effective web solutions.",
                misionTitle: "Our mission",
                misionDesc:
                  "Our mission is to provide your business with the tools needed to grow and succeed in the digital age. We believe that design and technology can change the world, and we work to make this world a better place for you and your business.",
              },
              ab: {
                title: "Our Contacts",
                adr: "Ukraine, Lviv, Lvivska Street",
                tel: "Tel",
              },
            },
            seo: {
              services: {
                title:
                  "WebUi-Studio website Development Services | Custom Web Solutions",
                description:
                  "Our company offers website development services for various industries, including landing pages, corporate websites, and e-commerce solutions. We will create a unique website for your business.",
              },
              landing: {
                title: "Web development landing page | WebUi-Studio",
                description:
                  "Landing page development services for medium and small businesses. Custom design and affordable prices. Start selling your products today.",
              },
              bussines: {
                title:
                  "Corporate / business website development | WebUi-Studio",
                description:
                  "Corporate or business website development services. Unique design in a corporate style. Order a business website at the best price right now.",
              },
              store: {
                title: "E-commerce Website Development services | WebUi-Studio",
                description:
                  "Custom e-commerce website development services. We create online stores on platforms such as Magento, WordPress, Shopify, and others. Individual design and affordable pricing.",
              },
              web: {
                title: "Mobile app development company | WebUi-Studio",
                description:
                  "Custom mobile app development services for Android and iOS. Development of corporate apps and e-commerce applications. WebUi-Studio is the best app development company near you.",
              },
              crm: {
                title: "CRM integration services | WebUi-Studio",
                description:
                  "CRM integration services with e-commerce, VoIP telephony, Office 365, Shopify, social media, and other services. Affordable prices and high-quality services.",
              },
              design: {
                title: "Website design services | WebUi-Studio",
                description:
                  "Custom website design development services for e-commerce, single-page and business websites. WebUi-Studio is a website design development company near you.",
              },
              aboutUs: {
                title: "Web studio WebUi-Studio",
                description: "The best web design and website creation studio",
              },
              mainPage: {
                title: "Website development company | WebUi-Studio",

                description:
                  "Development of e-commerce websites for small and medium-sized businesses. Website development on Shopify, Magento, WordPress, and other popular CMS platforms. WebUi-Studio is the best website development company.",
              },
            },
          },
        },
      },
      ua: {
        translation: {
          description: {
            part1: {
              mainPage: {
                mainTitle:
                  "Створення сайтів для підвищення ефективності бізнесу",
                mainButSend: "Напишіть нам",
                conForm: "Контактна форма",
                mainButStart: "Почати",
                mainOurServ: "Наші Послуги",
                landTitle: "Landing page",
                lendDesc:
                  "Landing page з прогресивним дизайном і хорошою функціональністю.",
                businesTitile: "Бізнес-сайт",
                businesDesc:
                  "Сайт для вашого бізнесу з максимальною реалізацією ваших потреб.",
                onlineTitile: "Інтернет-магазин",
                onlineDesc:
                  "Ми створимо ідеальну платформу для ваших онлайн-продажів.",
                crmInterTitile: "CRM інтеграція",
                crmInterDesc:
                  "CRM інтеграція: оптимізуйте ваш бізнес швидше та ефективніше.",
                designTitile: "Прогресивний дизайн",
                designDesc:
                  "Наша команда дизайнерів розробить унікальний дизайн для вашого бренду.",
                optimizaTitile: "Веб-додатки",
                optimizaDesc:
                  "Зручні веб-додатки для ефективного користування онлайн.",
                aboutUsTitle: "Про нас",
                aboutFirstTitle: "Досвід",
                aboutFirst:
                  "Ми команда професіоналів, націлена на максимальний результат для клієнта. Ми прагнемо створювати не просто вражаючі, а максимально корисні та ефективні речі. Ми працюємо на результат, адже успіх наших клієнтів – наш успіх!",
                aboutSecondTitle: "Технології",
                aboutSecond:
                  "Ми використовуємо передові технології в розробці. Завдяки цьому ваш веб-додаток буде максимально швидким і візуально привабливим для користувача. Ви можете переглянути список технологій нижче.",
                aboutThreTitle: "Комунікація",
                aboutThre:
                  "Ми повністю відкриті до будь-яких потреб клієнта. Спілкування з клієнтом відбувається на всіх етапах розробки для досягнення максимального результату. Девіз нашої компанії - задоволений клієнт, задоволені ми.",
                tech: "Технології",
                write: "Зверніться до нас",
                vul: "вулиця Львівська",
                ind: "78560 Львів",
                count: "Україна",
                phone: "Телефон",
                name: "Імʼя",
                mail: "адрес",
                phoneForm: "Телефон",
                tem: "Тема",
                mess: "Повідомлення",
                buttSendMes: "Відправити повідомлення",
                headerMain: "Головна",
                headerAbout: "Про нас",
                headerServ: "Послуги",
                blg: "Блог",
                headerContact: "Контакти",
                fourFo: "Вибачте, але такої сторінки не існує.",
                returnTo: "Повернутись на головну",
                footer: "Карта сайту",
              },
              footer: {
                h1: "Карта сайту",
                main: "Головна сторінка",
                mainEn: "Англійська версія",
                mainUk: "Українська версія",
                serv: "Послуги",
                landi: "Односторінкові сайти",
                bussin: "Бізнес сайт",
                store: "Інтрнет-магазин",
                app: "Веб-додатки",
                crm: "Црм системи",
                constact: "Контакти",
                about: "Про нас",
                blog: "Блог",
                sitemap: "Карта сайту",
              },
              services: {
                title: "Наші послуги",
                offer: "Послуги, які ми пропонуємо",
                firstOfferName: "Односторінковий сайт",
                firstOfferDesc:
                  "Створюємо захопливі лендінги, щоб привернути вашу аудиторію та збільшити продажі.",
                secondOfferName: "Бізнес-сайт",
                secondOfferDesc:
                  "Розробка високоефективних веб-сайтів для вашого бізнесу.",
                threOfferName: "Інтернет-магазин",
                threOfferDesc:
                  "Розробка високоефективних рішень для інтернет-торгівлі, адаптованих до вашого бізнесу.",
                fourOfferName: "Розробка веб додатків",
                fourOfferDesc:
                  "Професійна розробка веб-додатків: Індивідуальні цифрові рішення для вашого бізнесу",
                sixOfferName: "Дизайн веб-додатків",
                sixOfferDesc:
                  "Професійні послуги з дизайну веб-додатків: Індивідуальні цифрові рішення для вашого бізнесу.",
                fiveOfferName: "CRM інтеграція ",
                fiveOfferDesc:
                  "Прості та ефективні рішення щодо інтеграції CRM та програмного забезпечення для оптимізації бізнес-процесів",
                readMor: "Детальніше",
                firstQuestion: "Які основні етапи розробки веб-сайту?",
                firstAnsver:
                  "Етапи розробки веб-сайту включають аналіз вимог, проектування, розробку, тестування та запуск. Після цього слід здійснювати підтримку та оновлення.",
                secondQuestion: "Що таке адаптивний дизайн?",
                secondAnsver:
                  "Адаптивний дизайн - це підхід до розробки веб-сайту, який робить його придатним для відображення на різних пристроях і розмірах екранів, таких як комп'ютери, планшети та смартфони.",

                threQuestion:
                  "Скільки часу зазвичай потрібно на розробку веб-сайту?",
                threAnsver:
                  "Час розробки веб-сайту залежить від складності проекту. Простий лендінг може бути розроблений за кілька тижнів, в той час як складний веб-портал може зайняти кілька місяців.",

                fourQuestion:
                  "Які основні фактори впливають на вартість розробки веб-сайту?",
                fourAnsver:
                  " Вартість розробки веб-сайту залежить від складності проекту, обсягу роботи, дизайну та функціональних вимог.",
                fiveQuestion: "Які тренди веб-розробки актуальні сьогодні?",
                fiveAnsver:
                  " Актуальні тренди включають в себе адаптивний дизайн, швидкість завантаження сторінок, використання мікроінтеракцій, впровадження штучного інтелекту.",
                sixQuestion:
                  "Що таке хостинг і чому він важливий для веб-сайту?",
                sixAnsver:
                  "Хостинг - це послуга, яка дозволяє розміщувати веб-сайт на сервері, щоб він був доступний в Інтернеті. Вибір надійного хостингу важливий для швидкості роботи сайту і безпеки даних.",
                queTitle: "Питання, що часто задаються",
                contactUs: "Зв'яжіться з нами",
                pContact:
                  "Ми готові відповісти на ваші запитання та надати додаткову інформацію. Не соромтеся звертатися до нас.",
                buttonFor: "Контакти",
                auto: "Автопарк",
                serv: "Послуги",
                about: "Про нас",
                inf: "Контакти",
              },
              landing: {
                title: "Створення лендінгу на замовлення",
                listOfSerc: "Список послуг",
                firstTitle: "Вітаємо вас у світі конвертуючих лендінгів!",
                firstDesc:
                  "Відомий факт: перші враження важливі. У світі інтернет-маркетингу, лендінг сторінка є вашим віртуальним вітальним вікном. На нашій сторінці ви дізнаєтеся, чому розробка лендінгу - це перший крок до успіху вашого онлайн-бізнесу.",
                secondTitle: "Що таке лендінг і чому він важливий?",
                secondDesc:
                  "Лендінг - це односторінковий веб-сайт, створений з однією метою - переконати відвідувача взяти якусь дію. Не важливо, чи ви продаете товари, послуги, чи просто збираєте контактну інформацію - лендінг допоможе вам досягти вашої мети.",
                threTitle: "Наша послуга розробки лендінгу",
                threDesc:
                  "Наша команда професіоналів має багаторічний досвід у розробці лендінгів різної складності. Ми пропонуємо:",
                threFirst:
                  "Створення унікального дизайну: Ваш лендінг буде виділятися серед конкурентів і залишить незабутнє враження.",
                threSecond:
                  "Оптимізацію для конвертації: Ми знаємо, як зробити ваш лендінг привабливим для ваших клієнтів і збільшити конверсію.",
                threThre:
                  "Аналітику та вдосконалення: Ми враховуємо результати та постійно оптимізуємо ваш лендінг для досягнення найкращих результатів.",
                fourTitle: "Чому обирати нас?",
                fourDesc:
                  "Наша команда професіоналів має багаторічний досвід у розробці лендінгів різної складності. Ми пропонуємо:",
                fourFirst:
                  "Досвід: Ми знаємо, як створювати лендінги, які працюють.",
                fourSecond:
                  "Індивідуальний підхід: Ми розглядаємо кожен проект індивідуально, враховуючи ваші потреби.",
                fourThre:
                  "Орієнтовність на результат: Ми працюємо на результат і завжди виходимо на зустріч вашим цілям.",
              },
              bussines: {
                title: "Корпоративний сайт: розробка та створення",
                listOfSerc: "Список послуг",
                firstTitle:
                  "Ласкаво просимо вас до світу високоефективних бізнес-сайтів!",
                firstDesc:
                  "Відомо, що перше враження має велике значення. У сфері інтернет-маркетингу ваш бізнес-сайт є вашим віртуальним вікном. На нашій сторінці ви дізнаєтеся, чому розробка бізнес-сайту є першим кроком до успіху вашого онлайн-бізнесу.",
                secondTitle: "Що таке бізнес-сайт і чому він важливий?",
                secondDesc:
                  "Бізнес-сайт - це багатосторінкова онлайн-платформа, створена з метою представлення вашого бренду та досягнення бізнес-цілей. Незалежно від того, чи ви продаєте товари, послуги чи прагнете встановити міцний онлайн-присутність, бізнес-сайт є ключовим.",
                threTitle: "Наша послуга розробки бізнес-сайту",
                threDesc:
                  "Наша команда професіоналів має великий досвід у розробці бізнес-сайтів різної складності. Ми пропонуємо:",
                threFirst:
                  "Створення унікального дизайну: Ваш бізнес-сайт буде виділятися серед конкурентів і залишить незабутнє враження.",
                threSecond:
                  "Оптимізацію для конвертації: Ми знаємо, як зробити ваш сайт привабливим для вашої аудиторії та підвищити конверсію.",
                threThre:
                  "Аналітику та вдосконалення: Ми враховуємо результати та постійно оптимізуємо ваш бізнес-сайт для досягнення найкращих результатів.",
                fourTitle: "Для кого ця послуга?",
                fourDesc:
                  "Наша команда професіоналів має багаторічний досвід у розробці лендінгів різної складності. Ми пропонуємо:",
                fourFirst:
                  "Підприємці та стартапи, які планують встановити або підвищити свою онлайн-присутність.",
                fourSecond:
                  "Власники бізнесу, які мають на меті розширити аудиторію, збільшити продажі та залучити нових клієнтів.",
                fourThre:
                  "Маркетингові агентства, які шукають надійного партнера у сфері веб-розробки.",
              },
              store: {
                title: "Розробка та створення інтернет-магазину під ключ",
                listOfSerc: "Список послуг",
                firstTitle: "Вітаємо вас у світі онлайн-торгівлі!",
                firstDesc:
                  "Відомий факт: перші враження важливі. У світі екомерції, ваш інтернет-магазин - це ключ до успішних онлайн-продажів. На нашій сторінці ви дізнаєтеся, чому розробка інтернет-магазину - це крок до вашого електронного бізнесу.",
                secondTitle: "Що таке інтернет-магазин і чому він важливий?",
                secondDesc:
                  "Інтернет-магазин - це електронний магазин, створений для зручних та прибуткових онлайн-продажів. Незалежно від того, чи продаєте ви товари, послуги або шукаєте збільшити клієнтську базу - інтернет-магазин допоможе вам досягти мети.",
                threTitle: "Наша послуга розробки інтернет-магазину",
                threDesc:
                  "Наша команда професіоналів має великий досвід у створенні різноманітних інтернет-магазинів. Ми пропонуємо:",
                threFirst:
                  "Створення унікального дизайну: Ваш інтернет-магазин буде виділятися серед конкурентів і залишить глибоке враження.",
                threSecond:
                  "Оптимізацію для збільшення продажів: Ми знаємо, як зробити ваш інтернет-магазин привабливим для клієнтів і підвищити конверсію.",
                threThre:
                  "Аналітику та вдосконалення: Ми аналізуємо результати та постійно покращуємо ваш інтернет-магазин для досягнення найкращих результатів.",
                fourTitle: "Для кого ця послуга?",
                fourDesc:
                  "Наша команда професіоналів має багаторічний досвід у розробці лендінгів різної складності. Ми пропонуємо:",
                fourFirst:
                  "Підприємці та стартапи, які планують запустити новий продукт чи послугу.",
                fourSecond:
                  "Власники бізнесу, які мають намір підвищити продажі та привернути нових клієнтів.",
                fourThre:
                  "Маркетингові агентства, які шукають надійного партнера в галузі розробки веб-магазинів.",
              },
              web: {
                title: "Розробка мобільних додатків під ключ",
                listOfSerc: "Список послуг",
                firstTitle:
                  "Ласкаво просимо вас до світу розробки веб-додатків!",
                firstDesc:
                  "Відомий факт: перші враження важливі. У світі інтернет-маркетингу, веб-додаток є вашим віртуальним вікном. На нашій сторінці ви дізнаєтеся, чому розробка веб-додатків - це перший крок до успіху вашого онлайн-бізнесу.",
                secondTitle: "Що таке веб-додатки і чому вони важливі?",
                secondDesc:
                  "Веб-додаток - це інтерактивний онлайн-ресурс, створений для вирішення конкретних завдань. Не важливо, чи ви плануєте автоматизувати бізнес-процеси, створити онлайн-магазин або підвищити залучення клієнтів - веб-додаток допоможе вам досягти вашої мети.",
                threTitle: "Наша послуга розробки веб-додатків",
                threDesc:
                  "Наша команда професіоналів має багаторічний досвід у розробці веб-додатків різної складності. Ми пропонуємо:",
                threFirst:
                  "Створення унікального дизайну: Ваш веб-додаток буде виділятися серед конкурентів і залишить незабутнє враження.",
                threSecond:
                  "Оптимізацію для зручності користувачів: Ми знаємо, як зробити ваш веб-додаток легким у використанні та привабливим для вашої аудиторії.",
                threThre:
                  "Аналітику та постійне вдосконалення: Ми враховуємо результати та постійно оптимізуємо ваш веб-додаток для досягнення найкращих результатів.",
                fourTitle: "Для кого ця послуга?",
                fourDesc:
                  "Наша команда професіоналів має багаторічний досвід у розробці лендінгів різної складності. Ми пропонуємо:",
                fourFirst:
                  "Підприємців та стартапів, що мають ідею для онлайн-проекту.",
                fourSecond:
                  "Власників бізнесу, які хочуть розширити свою онлайн-присутність і покращити ефективність роботи.",
                fourThre:
                  "Маркетингових агентств, які шукають надійного партнера для створення веб-додатків.",
              },
              crm: {
                title: "Інтеграція CRM систем під ключ",
                listOfSerc: "Список послуг",
                firstTitle: "Ласкаво просимо у світ Інтеграції CRM!",
                firstDesc:
                  "Це добре відомий факт: перше враження має велике значення. У світі онлайн-бізнесу, інтеграція CRM служить вашим віртуальним входом. На нашій сторінці ви дізнаєтеся, чому впровадження інтеграції CRM є першим кроком до успіху вашого онлайн-бізнесу.",
                secondTitle: "Що таке Інтеграція CRM і чому вона важлива?",
                secondDesc:
                  "Інтеграція CRM включає об'єднання систем управління відносинами з клієнтами з процесами вашого бізнесу для підвищення ефективності. Незалежно від того, чи ви керуєте взаємодією з клієнтами, оптимізуєте продажі або покращуєте маркетингові стратегії, інтеграція CRM допомагає досягти ваших цілей.",
                threTitle: "Наша послуга впровадження Інтеграції CRM",
                threDesc:
                  "Наша команда професіоналів має років досвіду у впровадженні інтеграції CRM різної складності. Ми пропонуємо:",
                threFirst:
                  "Індивідуальні рішення: Ваша інтеграція CRM буде налаштована для задоволення унікальних потреб вашого бізнесу, забезпечуючи безперешкодний процес.",
                threSecond:
                  "Оптимізацію інтеграції: Ми знаємо, як зробити вашу інтеграцію CRM привабливою та ефективною для ваших клієнтів, підвищуючи продуктивність.",
                threThre:
                  "Аналітику та постійне вдосконалення: Ми оцінюємо результати і постійно оптимізуємо вашу інтеграцію CRM для досягнення найкращих результатів.",
                fourTitle: "Для кого ця послуга?",
                fourDesc:
                  "Наша команда професіоналів має багаторічний досвід у розробці лендінгів різної складності. Ми пропонуємо:",
                fourFirst:
                  "Підприємців та стартапів, які прагнуть оптимізувати управління клієнтами.",
                fourSecond:
                  "Власників бізнесу, які бажають покращити продажі, взаємодію з клієнтами та ефективність.",
                fourThre:
                  "Маркетингових агентств, які шукають надійного партнера для інтеграції CRM.",
              },
              design: {
                title: "Дизайн сайту на замовлення за найкращою ціною",
                listOfSerc: "Список послуг",
                firstTitle: "Ласкаво просимо в світ дизайну веб-сайтів!",
                firstDesc:
                  "Це добре відомий факт: перше враження має велике значення. У світі онлайн-бізнесу дизайн веб-сайту служить вашим віртуальним входом. На нашій сторінці ви дізнаєтеся, чому створення дизайну веб-сайту є першим кроком до успіху вашого онлайн-проекту.",
                secondTitle: "Що таке дизайн веб-сайту і чому він важливий?",
                secondDesc:
                  "Дизайн веб-сайту включає створення естетично привабливого та функціонального інтерфейсу для забезпечення позитивного користувацького досвіду. Незалежно від того, чи ви розробляєте особистий сайт, корпоративний портал чи онлайн-магазин, дизайн грає важливу роль у взаємодії з вашою аудиторією.",
                threTitle: "Наша послуга розробки дизайну веб-сайту",
                threDesc:
                  "Наша команда професіоналів має багаторічний досвід у розробці дизайну веб-сайтів різної складності. Ми пропонуємо:",
                threFirst:
                  "Індивідуальні рішення: Ваш дизайн веб-сайту буде створений для задоволення унікальних потреб вашого проекту, забезпечуючи безперешкодний інтерфейс.",
                threSecond:
                  "Оптимізацію дизайну: Ми знаємо, як зробити ваш веб-сайт привабливим та ефективним для ваших відвідувачів, підвищуючи залученість.",
                threThre:
                  "Аналітику та постійне вдосконалення: Ми оцінюємо результати і постійно оптимізуємо дизайн вашого веб-сайту для досягнення найкращих результатів.",
                fourTitle: "Для кого ця послуга?",
                fourDesc:
                  "Наша команда професіоналів має багаторічний досвід у розробці дизайну веб-сайтів різної складності. Ми пропонуємо:",
                fourFirst:
                  "Підприємців та стартапів, які прагнуть створити ефективний віртуальний інструмент для свого бізнесу.",
                fourSecond:
                  "Власників бізнесу, які бажають покращити онлайн-присутність та вразити свою аудиторію.",
                fourThre:
                  "Маркетингових агентств, які шукають надійного партнера для розробки інноваційних веб-проектів.",
              },
              aboutUs: {
                title: "Історія веб-студії WebUi-Studio",
                firstText:
                  "Ми - творці інноваційних і вражаючих веб-рішень, завдяки яким ваш бізнес розвивається та стає більш доступним у світі онлайн. Наша команда згуртованих професіоналів має багаторічний досвід у розробці веб-сайтів та додатків, що надає нам впевненість у здатності досягати максимальних результатів для вас.",
                secondTitle: "Наша мета",
                secondDesc:
                  "Ми віримо, що веб-простір - це не просто інтернет, а можливість створити місце для вашого бренду, де кожен клієнт відчує вашу унікальність і професіоналізм. Ми прагнемо розуміти ваші потреби та цілі, а потім перетворювати їх у креативні та ефективні веб-рішення.",
                misionTitle: "Наша місія",
                misionDesc:
                  "Забезпечити вашому бізнесу інструменти, які допоможуть вам зростати та досягати успіху у цифровому віці. Ми віримо в те, що дизайн та технологія мають змінювати світ, і ми працюємо, щоб зробити цей світ кращим для вас та вашого бізнесу.",
              },
              ab: {
                title: "Наші контакти",
                adr: "Україні, Львів, вулиця Львівська",
                tel: "Тел",
              },
            },
            seo: {
              services: {
                title:
                  "WebUi-Studio послуги з Розробки Сайтів | Індивідуальні Веб-Рішення",
                description:
                  "Наша компанія пропонує послуги з розробки сайтів для різних сфер, включаючи лендинги, корпоративні сайти та інтернет-магазини. Ми створимо унікальний веб-сайт для вашого бізнесу.",
              },
              landing: {
                title: "Замовити лендінг у WebUi-Studio",
                description:
                  "Розробка та створення лендінгу на замовлення. Краща ціна на односторінковий сайт. Не гайте час. Телефонуйте прямо зараз: +38093-724-61-93 та почніть ефективно продавати вже сьогодні.",
              },
              bussines: {
                title:
                  "Розробка та створення корпоративних сайтів | WebUi-Studio",
                description:
                  "Розробка та створення корпоративних сайтів під ключ. Дизайн, наповнення та просування. Замовте бізнес-сайт по найкращій ціні та насолоджуйтесь всіма перевагами корпоративного веб-ресурсу.",
              },
              store: {
                title: "Розробка інтернет-магазину під ключ | WebUi-Studio",
                description:
                  "Створення інтернет-магазинів під ключ. Замовте розробку ефективного онлайн магазину з продажу одягу, білизни або інших товарів та отримуйте прибуток, не виходячи з дому. Телефонуйте прямо зараз: +38093-724-61-93 та почніть продавати вже сьогодні.",
              },
              web: {
                title: "Розробка мобільних додатків | WebUi-Studio",
                description:
                  "Розробка та створення мобільних додатків під ключ для Android та iOS. Телефонуйте +38093-724-61-93 та дізнайтесь вартість розробки мобільного додатку під ваші потреби у нашого менеджера.",
              },
              crm: {
                title: "Інтеграція CRM систем | WebUi-Studio",
                description:
                  "Інтеграція (впровадження, підключення) CRM систем для інтернет-магазину, логістики, малого та середнього бізнесу, віртуального офісу. Працюємо з KeyCrm, Perfectum, BPMonline, Sendpulse та іншими видами українських та зарубіжних CRM систем.",
              },
              design: {
                title: "Розробка дизайну сайту | WebUi-Studio",
                description:
                  "Розробка та створення веб-дизайну сайтів по індивідуальним замовленням. Телефонуйте прямо зараз: +38093-724-61-93 та замовне унікальний дизайн для свого онлайн ресурсу.",
              },
              aboutUs: {
                title: "Веб-студія WebUi-Studio",
                description:
                  "Найкраща студія з веб-дизайну та створення сайтів",
              },
              mainPage: {
                title: "Створення сайтів під ключ | WebUi-Studio",
                description:
                  "Створення сайтів під ключ на платформі WordPress, Wix та інших. Розробка веб-сайту з нуля під будь-які цілі — візитка, лендінг, інтернет-магазин, корпоративний ресурс. Щоб замовити сайт по найкращій ціні, телефонуйте прямо зараз: +38093-724-61-93",
              },
            },
          },
        },
      },
    },
  });

export default i18n;
