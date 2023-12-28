import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
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
                mainDescSm:
                  "Increasing sales is the main goal of any website. That's why creating websites for us is more than just a job. We are not just experts, we are true artists.",
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
              newInfoBlock: {
                title: "Website Development by WebUi: Key Advantages",
                smalDesc:
                  "There are numerous reasons why ordering this service from us is a truly smart decision. Here are just a few of them:",
                first:
                  "After studying the specifics of the task, you will receive accurate information about the timelines and cost of its implementation. We will not suddenly confront you with the fact that you need to cover some additional expenses later on.",
                second:
                  "Orders are fulfilled in accordance with the terms of the legal contract. We draw up transparent and understandable contracts, drawn up in accordance with Ukrainian law. No hidden pitfalls, ambiguous formulations, small print, etc.",
                thre: "Many years of successful practice, confirmed by portfolio cases. Over the years, we have created a huge number of websites for hundreds of clients. Among our satisfied customers, you will find brand names known not only in our country but also abroad.",
                four: "All work is done turnkey. This means that if you use our services, you will receive a fully ready-made website as a result. There is no need to hire other specialists to adjust or refine anything additionally.",
                five: "We adhere to the latest quality standards. Technologies are constantly evolving, and we carefully monitor this process. That is why we are always aware of the latest changes in the field of web development. Thanks to this, our clients receive truly modern websites that correspond to the latest research in the field of marketing, advertising, and consumer psychology.",
                six: "In development, we use the most effective tools. We create websites on Wordpress, Joomla, or other popular platforms in such a way that the customer receives a maximum of useful features, a clear structure, convenient usability, and a flexible settings system.",
                seven:
                  "We create turnkey websites for any needs. Perhaps today you need a business card site, and tomorrow you will need an online store, promo site, Landing Page, corporate site, blog, etc. In any of these cases, you can turn to us for help.",
                eight:
                  "To order website development, submit an online application or contact us right now. We accept applications from potential clients around the clock and try to process them as quickly as possible.",
              },
              newInfoSecondBlock: {
                title:
                  "Turnkey Website Development: What's Included in the Service",
                smalDesc:
                  "Website development, the price of which will pleasantly surprise you, can be done even by one specialist. But when it comes to a large-scale project, not just a business card consisting of 1 page, it is necessary to involve an entire team of specialists. The work will be carried out in the following areas:",
                first:
                  "Business analytics. In order for website development to be successful and truly meet the needs of clients, it is necessary to study the market, collect and analyze data. This helps to predict trends and ultimately create a product that will be effective not only now but also in the future, in the coming years.",
                second:
                  "Front-End. This direction is handled by a layout designer who transforms the design into various frontend technologies, including a correct HTML structure and CSS styles.",
                thre: "Back-End. The programmer responsible for this component of the project creates the so-called server part of the website. His task is to configure request processing, storage, and interaction with data, ensuring the operation of all site functions on devices of various types.",
                four: "(UI/UX) design. Within this segment of work, it is necessary to create a design that will not only be attractive and convenient but will also accurately reflect the client's brand and the specifics of positioning his business in the market.",
                five: "Copywriting and SEO promotion. On this front, the site is configured and filled with content. This is necessary so that search engines give the project a high rank in the issue for key queries. Advertising is ordered on social networks and other platforms if necessary. Quality texts are placed on the resource itself, thanks to which customers will be more willing to buy your goods and services.",
                eight:
                  "WebUi is truly high-quality website development. To get a web resource that effectively contributes to the development of your business, be sure to contact us. We will be happy to help!",
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
                desc: "How to order a landing page that truly works? It's very simple. Contact our manager right now, and within a few days, you'll receive an effective Landing Page with a high conversion rate.",
                listOfSerc: "List Of Services",
                firstTitle: "Advantages of Landing Page",
                firstDesc:
                  "Business owners may wonder why they need a landing page when there are other types of websites, such as online stores, available.",
                secondTitle: "What Is a Landing Page, and Why Is It Important?",
                secondDesc:
                  "A landing page is a single-page website designed with one purpose - to persuade visitors to take a specific action. Whether you're selling products, services, or simply collecting contact information, a landing page will help you achieve your goal.",
                threTitle:
                  "Certainly! A landing page addresses the following tasks:",
                threDesc:
                  "So, it cannot be said that a landing page is a waste of money. Even if you already have a main website, a landing page can enhance its effectiveness.",
                threFirst:
                  "Helps to quickly start selling goods or services. Launching a landing page requires significantly less time than creating an online store.",
                threSecond:
                  "Focuses the user's attention on a specific product or a small line of products. It's an ideal option for selling new products on the market, but even if the product has been on sale for a long time, a one-page site will effectively help find buyers.",
                threThre:
                  "Improves brand recognition. A landing page is an effective advertising tool. Therefore, you can significantly improve your brand's positions in niche markets and stand out noticeably against competitors.",
                fourTitle: "How the creation of a Landing Page takes place",
                fourDesc:
                  "Need a landing page whose cost will be fully justified by the profits you will receive with its help? Contact WebUi-Studio!",
                fourFirst:
                  "Analysis. The client's product or service, as well as their competitors and target audience, are examined. This helps understand how the page should look, what information is best to fill it with, and how to promote it.",
                fourSecond:
                  "Prototype creation. Based on the collected data and conclusions, a schematic basic version of the resource is developed, a path for visitors is formed, and principles of user interaction with the content are established.",
                fourThre:
                  "Design construction. A specialist crafts the page's appearance to encourage action. Various advertising traps and marketing techniques, relying on current scientific research in consumer psychology, assist in this process.",
                fourFour:
                  "Development. The direct implementation of the project involves creating an effective landing page ready for use—with responsive design, dynamic components, and interactive elements.",
                fourFive:
                  "Launch and maintenance. We start directing traffic to the site, monitoring for a while to ensure that the conversion meets quality standards.",
                fourSix:
                  "Adjustment. If the metrics are not satisfactory, we make changes and improve the results.",
              },
              bussines: {
                title: "Business website development",
                desc: "Today, you cannot successfully compete with rivals without a corporate website. Moreover, with the help of such a resource, you significantly optimize a large part of your business processes. And we will help you with that.",
                listOfSerc: "List Of Services",
                firstTitle: "Benefits of a Business Website",
                firstDesc:
                  "Interested in this service but still hesitant? Let's take a closer look at the specific benefits and opportunities that a corporate website opens up:",
                secondTitle:
                  "What Is a Business Website, and Why Is It Important?",
                secondDesc:
                  "A business website is a multi-page online platform created with the purpose of representing your brand and driving your business goals. Whether you're selling products, services, or aiming to establish a strong online presence, a business website is crucial.",
                threTitle: "Our Business Website Development Service",
                threDesc:
                  "Regarding other features, the website's functionality will necessarily include an account system for employees with different levels of access, capabilities, and permissions. Using these accounts, employees will be able to make changes to the functionality and gather statistics. Additionally, a marketplace and tools for building a customer database can be integrated into the resource.",
                threFirst:
                  "Image support and brand strengthening. A business focused on development should have a reputation and a 'face.' This is achieved through the publication of news and a unique visual style.",

                threSecond:
                  "Attracting new partners and clients. An online chat form and articles providing information about your company and its activities will help in this regard.",

                threThre:
                  "Additional advertising opportunities for services. A business website should include sections with detailed descriptions of the services provided by the company. A separate information block for partners and real testimonials from satisfied clients can be the final convincing touch.",

                threFour:
                  "Finding new employees. As practice shows, people without relevant experience and genuine interest do not search for jobs on the specific website of a company. Moreover, candidates who come to you through the business website are more informed about the specifics of the company's activities.",
                fourTitle:
                  "Key Features of Creating a Quality Corporate Website",
                fourDesc:
                  "The development of a business website follows specific standards. Here's what sets an effective and user-friendly corporate website apart:",
                fourFirst:
                  "Convenient structure. Pages and sections should be organized sequentially, logically, following a clear hierarchy. This makes the website more appealing to users and, consequently, more effective in achieving its goals. Proper page organization simplifies user interaction with the website.",
                fourSecond:
                  "Compliance with modern design trends and brand style. Today, people are accustomed to quality, stylish, user-friendly interfaces from Google and Apple. A good website should look modern while reflecting the company's unique corporate style and seamlessly integrating with the brand's advertising materials—flyers, brochures, catalogs, packaging, etc.",
                fourThre:
                  "Adaptation to mobile devices and high loading speed. Today, a significant number of users rarely go online from a computer. However, many use PCs for important tasks. Therefore, the website's pages must display correctly on all devices, regardless of screen size and resolution. Equally important is the speed of content display. According to statistics, 60% of users immediately leave if a page takes longer than 3 seconds to load.",
                fourDescTwo:
                  "Among other important criteria for determining quality, we should note multilingual support, hosting reliability, the informativeness of the content, and sufficient functionality. To get a corporate website that fully meets modern standards and benefits your business, contact WebUi-Studio.",
              },
              store: {
                title: "Custom e-commerce website development",
                desc: "E-commerce development is a proven and reliable way to expand the customer base, always relevant for business owners striving to achieve more.",
                listOfSerc: "List Of Services",
                firstTitle: "What should be in an online store?",
                firstDesc:
                  "Creating an online store involves integrating standard marketplace features such as autofill, saved search history, automatic proposal selection, customer account formation system, cart for unregistered users, and much more. Speaking of the structure, an online store, in addition to the main page, should have several important sections, namely:",
                secondTitle:
                  "What is an Online Store, and Why Is It Important?",
                secondDesc:
                  "An online store is an electronic marketplace designed for convenient and profitable online sales. Whether you're selling products, services, or aiming to expand your customer base, an online store will help you achieve your goals.",
                threTitle: "Our E-commerce Development Service",
                threDesc:
                  "Also, you can have separate pages for contact information, promotions, and discounts. In general, the number of sections may vary depending on the client's preferences. No matter how many pages you want to have on your web resource, contact WebUi-Studio when you need to create an online store, and the price will pleasantly surprise you.",
                threFirst:
                  "Catalog. This is where all product cards are placed and grouped. It's crucial for it to have a user-friendly search system with filters for prices, popularity, categories, brands, ratings, sizes, colors, etc.",
                threSecond:
                  "About Us. A page or group of pages where comprehensive information about the online store, its history, features, and advantages is presented. Describe the general advantages of the products you sell, such as whether the products are manufactured in-house or provided by reliable partners, and assure 100% quality.",
                threThre:
                  "Payment and Delivery. Provide the customer with detailed information on how they can pay for goods and receive orders. This information will also be displayed when making a purchase, but it can be presented more expansively in a special section.",
                threFour:
                  "Exchange and Returns. It's crucial for the customer to know how the product return process works and what they need to do for it. While online shopping has become commonplace for people, there is still a certain anxiety associated with the possibility of receiving damaged or poor-quality goods. Therefore, in this section, it's desirable not only to clearly describe the exchange and return procedures but also to assure the customer that even if difficulties arise due to the fault of the online store, supplier, or carrier, everything will be resolved in favor of the buyer.",
                threFive:
                  "Blog. This section will be an additional source of traffic. Publish interesting information related to your niche and specific product groups. For example, if your range includes smartphones, you can post news about the mobile gadget market and useful tips on choosing, using, and configuring them.",
                threSix:
                  "Contacts. Provide users with all contact information so that they are confident they can always reach you with any questions.",
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
                title: "Mobile App Development Turnkey",
                desc: "Smartphones have become an integral part of modern life. That's why the development of mobile applications is a promising direction for any business. And the experts at WebUi-Studio will help you.",
                listOfSerc: "List of Services",
                firstTitle: "Benefits of a Mobile App",
                firstDesc:
                  "Don't despair when you lack ideas for a unique product that can quickly capture the global market, as was the case with Instagram and TikTok. If you have your own business, Android app development can bring many benefits. We can offer solutions that will help develop your business in almost any niche.",
                secondTitle:
                  "What Are Web Applications and Why Are They Important?",
                secondDesc:
                  "A web application is an interactive online resource created to solve specific tasks. Whether you plan to automate business processes, create an online store, or increase customer engagement, a web application will help you achieve your goal.",
                threTitle:
                  "Here's how your custom smartphone application can help:",
                threDesc:
                  "So when you've stopped hesitating and realized the benefits you can get, place an order for software right now on our website. Developing an Android app is a service worth ordering from WebUi-Studio if you want a truly high-quality product.",
                threFirst:
                  "Increase customer loyalty. Even if you already have a website through which you sell services or products, it will be much more convenient for the customer to launch an app than to search for a website through a browser.",
                threSecond:
                  "Create a new sales channel. You may attract new customers from the AppStore user base. This will increase the recognition of your brand, which will also positively affect sales.",
                threThre:
                  "Automate business processes. With the help of the app, you can optimize logistics, control certain processes, and manage them, which will, in turn, lead to increased efficiency. This will significantly save on personnel, to whom you would otherwise have to delegate these tasks.",
                threFour:
                  "Improve your image. A company that has its own application seems more reliable to the consumer. Against the background of customers who don't have their own program for mobile devices, you will become more noticeable.",
                threFive:
                  "Improve communication quality with customers. Thanks to the app, you stay in touch with the customer 24/7, as long as they have an internet connection. Unlike a website, the app catches the user's eye every time they unlock the device screen.",
                fourTitle: "Technologies and Platforms We Use",
                fourDesc:
                  "The most popular OS for mobile devices today is Android. Therefore, in the vast majority of cases, we work with it. Since thousands of new products are added to Google Play every day, development should be approached with extreme responsibility to withstand the competition. We consider the main trends in the market, as well as the fact that Android operates on a large number of devices with different power, screens, and OS versions. So we make the app as adaptive as possible, paying a lot of attention to testing. We ensure support not only for modern but also for old versions of the operating system. We also don't forget about user security—applying modern methods of biometric authentication and encryption. If you need mobile app development, the price of which is completely justified by quality, then contact us. As for the most common programming languages for smartphones on Android, these are:",
                fourFirst:
                  "Java. Allows for procedural or object-oriented programming.",
                fourSecond:
                  "Kotlin. Efficient, safe, and convenient language. Recognized by Google as the official language for Android development.",
                fourThre:
                  "React Native. A framework that allows you to create apps not only for Android but also for iOS or Windows.",
                descPoT:
                  "The cost of developing a mobile app depends on the complexity of the task. The time spent on solving tasks also matters. But you shouldn't worry: in the contract that we will sign before starting work, the exact amount will be specified, which will not change until the completion of development.",
              },
              crm: {
                title: "CRM System Integration Turnkey",
                desc: "Automation of business processes is what you need to outperform competitors. A CRM system significantly simplifies firm management and contributes to clearer and more efficient interaction with customers.",
                listOfSerc: "List of Services",
                firstTitle: "Why Integrate CRM?",
                firstDesc:
                  "First of all, such systems are needed for online stores. But even if you don't conduct business through web resources yet, CRM will be beneficial for you.",
                secondTitle: "What Is CRM Integration and Why Is It Important?",
                secondDesc:
                  "CRM integration involves combining customer relationship management systems with your business processes to enhance efficiency. Whether you are managing customer interactions, optimizing sales, or improving marketing strategies, CRM integration helps you achieve your goals.",
                threTitle:
                  "Here are the positive effects you will get from CRM implementation:",
                threDesc:
                  "So, if you want to get a standardized database of customer and partner contacts and more effectively control the quality of the sales department's work, don't hesitate! Order CRM for your business at WebUi-Studio right now.",
                threFirst:
                  "Increased enterprise productivity. Resource expenditure on solving many tasks decreases, employees' use of work time is optimized, and personnel costs decrease. This is achieved because many processes that required careful control now pass automatically with CRM.",
                threSecond:
                  "Improved customer interaction. Ensuring the quick processing of orders, inquiries, and any requests from users who purchase your services and products. Due to improved service quality, you will steadily expand the circle of loyal customers, increasing audience loyalty.",
                threThre:
                  "Detailed analytical data. The system automatically collects detailed information about sales, customers, and employee actions. Based on this data, management can make more informed decisions that contribute to company development. Service and product promotion, as well as sales management, will be significantly improved, leading to a noticeable increase in company revenue.",
                fourTitle: "What Can CRM Be Integrated With?",
                fourDesc:
                  "The system is capable of solving numerous tasks. But to generalize, it can be integrated with the following structures:",
                fourDescTwo:
                  "Perhaps you don't yet know exactly what you might need. But WebUi-Studio specialists will help you figure it out. Contact us or request a callback, and we will gladly provide comprehensive consultation on CRM integrations for small or large businesses.",
                fourFirst:
                  "Corporate website or landing page. With CRM, you can send data for cross analytics, leads, get-call, email tracking, and analyze them. You will have the opportunity to analyze the effectiveness of marketing investments by tracking the customer's complete path from viewing the ad to making a purchase, including repeat purchases.",
                fourSecond:
                  "Online store. CRM for an online store will allow order exchange, update of product availability and prices, management of promotions, loyalty programs, and referrals.",
                fourThre:
                  "Accounting system. You can synchronize customer order data, connect informational messages, and provide technical support for orders.",
                fourFour:
                  "Mailing services. The system will help send contacts to email and SMS mailing services, send system messages to consumers, and upload statistics.",
                fourFive:
                  "Analytics services. CRM for a store or any other structure will collect data, qualify leads, and then send information to services and receive results.",
                fourSix:
                  "IP telephony. Thanks to integration with something like Ringostat or Binotel, you can set up two-way communication to create contacts, assign service personnel, and send UTM tags.",
              },
              design: {
                title: "Custom Website Design at the Best Price",
                desc: "A website is the face of your business. That's why website design development is one of the most crucial stages in brand creation and forming a positive image of your company.",
                listOfSerc: "List of Services",
                firstTitle: "Why Do You Need Custom Design?",
                firstDesc:
                  "On the Internet, you can find free or extremely cheap template design options for websites. It makes sense to use them when your business has an extremely small budget, or if there's little time, and the project needs to be ready tomorrow or the day after.",
                secondTitle: "What Is Website Design and Why Is It Important?",
                secondDesc:
                  "Website design includes creating an aesthetically appealing and functional interface to ensure a positive user experience. Whether you are developing a personal website, a corporate portal, or an online store, design plays a crucial role in interacting with your audience.",
                threTitle:
                  "In any other case, you should choose only custom website design. Here are its key advantages:",
                threDesc:
                  "As a result, you will get a personalized, unique design. It will effectively contribute to increasing sales, improving conversion, and enhancing brand recognition. Another important component of quality design is adaptability. The design of the website, the price of which is truly justified, should be correctly displayed on both PCs and mobile device screens, regardless of the screen resolution and diagonal length.",
                threFirst:
                  "Displaying all the advantages of your products, services, and brand as a whole in every detail;",
                threSecond:
                  "Interesting solutions that take into account the specifics of your target audience;",
                threThre:
                  "Maximum individual approach, the ability to implement almost any of your personal ideas and wishes.",
                fourTitle: "Project Implementation Stages",
                fourDesc:
                  "The development of website design begins immediately after discussing all the details with the customer and signing the contract. The work consists of several stages:",
                fourDescTwo:
                  "Keep in mind that creating design is a separate service. After the website design is developed, the resource is not ready for launch. It will be necessary to fill it with content and perform SEO promotion. But don't worry, WebUi-Studio provides a full range of services in this area, and if needed, you will get a complete turnkey website, not just design.",
                fourFirst:
                  "Drawing up a technical assignment for specialists. Everything discussed with the customer is described in detail in the form of clear tasks. Quality criteria for completing the technical assignment are also specified.",
                fourSecond:
                  "Formation of the structure plan. Regardless of the type of website, each design consists of some basic components found in both landing pages and online stores, as well as any other quality resources. These include color scheme, footer and header (upper and lower segments with a logo and information), menu and navigation tools, fonts, content (texts, images, etc.), as well as static and moving elements, styles of displaying virtual buttons, forms, and icons.",
                fourThre:
                  "Layout creation. The designer makes sketches, and then visualizes everything planned according to the technical assignment. When the layouts of all the main pages are ready, they are sent to the customer, who approves the result, and if desired, adds any comments, according to which amendments will then be made.",
                fourFour:
                  "Programming, layout. When the layout is finally approved, it is sent to web developers. They, in turn, create a full-fledged, working website ready for launch or content filling.",
              },
              aboutUs: {
                title: "Advantages of cooperating with WebUi-Studio",
                mainDesc:
                  "WebUi-Studio is a cohesive team of professionals that specializes in the professional creation and promotion of various types of websites. To experience it firsthand, feel free to reach out to us through any convenient means and order the service that suits your needs.",
                firstText:
                  "We are the creators of innovative and impressive web solutions that propel your business forward and make it more accessible in the online world. Our team of dedicated professionals boasts years of experience in website and app development, giving us the confidence to deliver exceptional results for you.",
                secondTitle: "Our goal",
                secondDesc:
                  "We believe that the online space is not just the internet it's an opportunity to establish a digital presence for your brand, where every customer can experience your uniqueness and professionalism. We strive to understand your needs and goals and then transform them into creative and effective web solutions.",
                misionTitle: "Our mission",
                misionDesc:
                  "Our mission is to provide your business with the tools needed to grow and succeed in the digital age. We believe that design and technology can change the world, and we work to make this world a better place for you and your business.",
                first:
                  "If you already have a website but are dissatisfied with its positions in search engine results, visitor or customer numbers, we will carefully analyze the shortcomings of the resource and rectify them. Within a few months, you will witness a significant positive impact reflected in tangible metrics.",
                second:
                  "We create presentable and user-friendly web resources that display uniformly across all browsers and devices. This ensures a seamless experience for your visitors, serving as additional motivation for them to engage with your service or product.",
                thre: "We offer turnkey website development rather than addressing individual tasks. This is convenient for the client, as it requires minimal effort on their part. Whether you need a blog, an e-commerce platform, or a corporate website, we'll develop it from scratch and position it prominently among websites in your niche.",
                four: "We develop Android applications to bring significant benefits to your business. If you have your own ideas for an application, we are ready to bring them to life.",
                tOne: "Who will work on your project",
                tTwo: "A separate specialist or sometimes a team is responsible for each area of work. In most cases, task execution is distributed among the following team members:",
                tThre:
                  "Web developers: Responsible for the direct development and ongoing maintenance of web resources, handling technical aspects.",
                tFour:
                  "Designers: Develop the visual components of websites, finding the best ways to implement the client's vision while considering current industry trends and standards.",
                tFive:
                  "SEO specialists: Engage in website promotion to attract as many representatives of your target audience as possible. They are also responsible for filling the resource with textual content.",
                tSix: "Android developers: Create mobile applications for you that are safe, efficient, and competitive in the market.",
                tSeven:
                  "WebUi-Studio operates with quality and responsibility. We never exceed the contract limits or demand additional payments from clients. If you have any questions, feel free to contact us, and we will gladly answer them.",
              },
              ab: {
                title: "Our Contacts",
                adr: "Ukraine, Lviv",
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
                mainTitle: "Створення сайтів для бізнесу",
                mainDescSm:
                  "Збільшення продажів — ось основна мета будь-якого веб-ресурсу. Саме тому створення сайтів для нас — це більше, ніж звичайна робота. Ми не просто експерти, а справжні митці.",
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
                  "Ми використовуємо передові технології в розробці. Завдяки цьому ваш веб-ресурс буде максимально швидким і візуально привабливим для користувача. Ви можете переглянути список технологій нижче.",
                aboutThreTitle: "Комунікація",
                aboutThre:
                  "Ми повністю відкриті до будь-яких побажань клієнта. Спілкування з клієнтом відбувається на всіх етапах розробки для досягнення максимального результату. Девіз нашої компанії - задоволений клієнт, задоволені ми.",
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
              newInfoBlock: {
                title: "Розробка сайтів від WebUi: ключові переваги",
                smalDesc:
                  "Є безліч причин, з яких замовити цю послугу саме в нас — це дійсно розумне рішення. Ось лише деякі з них:",
                first:
                  "Після того, як ми вивчимо особливості задачі, ви отримаєте точну інформацію щодо строків та вартості її виконання. Ми не будемо потім зненацька ставити вас перед фактом, що треба покрити якісь додаткові витрати.",
                second:
                  "Замовлення виконується у відповідності з умовами юридичного договору. Ми оформлюємо прозорі та зрозумілі контракти, складені згідно із законодавством України. Ніякого підводного каміння, нечітких формулювань, дрібного шрифту тощо.",
                thre: "Багаторічна успішна практика, підтверджена кейсами з портфоліо. За довгі роки ми зробили величезну кількість сайтів для сотен клієнтів. Серед наших задоволених замовників ви знайдете назви брендів, відомих не тільки в нас, а і за кордоном.",
                four: "Усі роботи виконуються під ключ. Це означає, що якщо ви скористуєтеся нашими послугами, то в результаті отримаєте повністю готовий сайт. Не знадобиться наймати інших спеціалістів, аби щось додатково налаштувати чи допрацювати.",
                five: "Ми дотримуємося найсучасніших стандартів якості. Технології постійно розвиваються, і ми ретельно відстежуємо цей процес. Саме тому ми завжди в курсі актуальних змін у галузі веб-розробки. Завдяки цьому наші клієнти отримують по-справжньому сучасні сайти, які відповідають останнім дослідженням у сфері маркетингу, реклами та психології споживачів.",
                six: "При розробці ми використовуємо найефективніші інструменти. Створення сайту на Wordpress, Joomla або інших популярних платформах виконуємо таким чином, аби замовник отримав максимум корисних функцій, чітку структуру, зручне юзабіліті, гнучку систему налаштувань.",
                seven:
                  "Ми виконуємо створення сайтів під ключ для будь-яких потреб. Можливо, сьогодні вам потрібен сайт-візитка, а завтра знадобиться інтернет-магазин, промо-сайт, Landing Page, корпоративний сайт, блог тощо. У будь-якому з цих випадків ви можете звернутися по допомогу до нас.",
                eight:
                  "Щоб замовити створення сайту, оформіть онлайн-заявку або зв'яжіться із нами прямо зараз. Ми приймаємо звернення потенційних клієнтів цілодобово і намагаємося їх обробляти максимально терміново.",
              },
              newInfoSecondBlock: {
                title: "Створення сайтів під ключ: що входить у послугу",
                smalDesc:
                  "Розробка сайту, ціна якої вас приємно здивує, може виконуватися навіть одним спеціалістом. Але якщо мова йде про масштабний проект, а не візитку, що складається з 1 сторінки, то необхідно долучати цілу команду спеціалістів. Робота вестиметься за наступними напрямками:",
                first:
                  "Бізнес-аналітика. Щоб розробка сайтів проходила успішно і дійсно закривала потреби клієнтів, необхідно досліджувати ринок, збирати та аналізувати дані. Це допомагає спрогнозувати тенденції та врешті-решт зробити продукт, що буде ефективним не тільки саме зараз, а і у майбутньому, у найближчі роки.",
                second:
                  "Front-End. Цим напрямком займається верстальник, який перетворює дизайн у різноманітні фронтенд-технології, в тому числі у коректну HTML-структуру та CSS-стилі.",
                thre: "Back-End. Програміст, який відповідає за цей компонент проекту, створює так звану серверну частину веб-ресурсу. Його задача полягає у налаштуванні обробки запитів, зберігання та взаємодії з даними, забезпеченні роботи усіх функцій сайту на пристроях різних типів.",
                four: "(UI/UX) дизайн. У рамках цього сегменту робіт треба створити дизайн, причому не просто привабливий та зручний, а такий, що точно відображатиме бренд клієнта та специфіку позиціювання його бізнеса на ринку.",
                five: "Копірайтинг та SEO-просування. На цьому напрямку виконується налаштування сайту та наповнення його контентом. Це необхідно для того, щоб пошукові системи надали проекту високий ранг у видачі по ключовим запитам. Замовляється реклама у соцмережах та на інших платформах, якщо потрібно. На самому ж ресурсі розміщуються якісні тексти, завдяки котрим клієнти охочіше купуватимуть ваші товари та послуги.",

                eight:
                  "WebUi — це дійсно якісна розробка сайтів. Щоб отримати web-ресурс, котрий ефективно посприяє розвитку вашого бізнесу, обов'язково звертайтеся до нас. Будемо раді допомогти!",
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
                desc: "Як замовити лендінг, який дійсно працює? Дуже просто. Зв'яжіться з нашим менеджером прямо зараз та вже через кілька днів отримайте ефективний Landing Page з високим рівнем конверсії.",
                listOfSerc: "Список послуг",
                firstTitle: "Переваги Landing Page",
                firstDesc:
                  "У власників бізнесу може виникнути питання, навіщо потрібна лендінг-сторінка, коли існують сайти інших типів, наприклад — ті ж самі інтернет-магазини.",
                secondTitle: "Що таке лендінг і чому він важливий?",
                secondDesc:
                  "Лендінг - це односторінковий веб-сайт, створений з однією метою - переконати відвідувача взяти якусь дію. Не важливо, чи ви продаете товари, послуги, чи просто збираєте контактну інформацію - лендінг допоможе вам досягти вашої мети.",
                threTitle: "Відповідаємо! Лендінг вирішує наступні задачі:",
                threDesc:
                  "Тож ніяк не можна сказати, що лендінг — це марна трата грошей. Навіть якщо у вас вже є основний ресурс, посадкова сторінка може посилити його ефективність.",
                threFirst:
                  "Допомагає швидко почати продавати товари або послуги. На запуск лендінгу потрібно суттєво менше часу, ніж на створення інтернет-магазину.",
                threSecond:
                  "Концентрує увагу користувача на конкретному продукті або невеликій лінійці товарів. Це ідеальний варіант для продажу новинок на ринку, але навіть якщо товар поступив у продаж давно, односторінковий сайт ефективно допоможе знайти на нього покупців.",
                threThre:
                  "Покращує впізнаваність бренду. Посадкова сторінка— ефективний рекламний інструмент. Тому ви зможете в декілька разів покращити позиції свого бренда за вузькими напрямками та помітно виділитися на фоні конкурентів.",
                fourTitle: "Як проходить створення Landing Page",
                fourDesc:
                  "Потрібний лендінг, ціна котрого буде повністю виправдана прибутками, які ви отримаєте з його допомогою? Звертайтеся в WebUi-Studio!",
                fourFirst:
                  "Аналіз. Досліджуються продукт або послуга клієнта, а також його конкуренти і цільова аудиторія. Це допомагає зрозуміти, як має виглядати сторінка, якою інформацією її краще наповнити, яким чином просувати.",
                fourSecond:
                  "Створення прототипу. На основі зібраних даних та зроблених висновків розробляється схематична базова версія ресурсу, формується шлях для відвідувачів, закладаються принципи взаємодії користувачів із контентом.",
                fourThre:
                  "Конструювання дизайну. Спеціаліст робить обличчя сторінки таким, щоб воно спонукало до дії. У цьому допомагають різноманітні рекламні пастки та маркетингові прийоми, що спираються на актуальні наукові дослідження в галузі психології споживачів.",
                fourFour:
                  "Розробка. Безпосередня реалізація проекту, створення ефективного лендінгу, готового до експлуатації — з адаптивною версткою, динамічними компонентами та інтерактивним дизайном.",
                fourFive:
                  "Запуск та супроводження. Починаємо направляти на сайт трафік, деякий час стежимо за тим, наскільки конверсія відповідає стандартам якості.",
                fourSix:
                  "Корегування. Якщо показники недостатньо високі, вносимо зміни та покращуємо результат.",
              },
              bussines: {
                title: "Корпоративний сайт: розробка та створення",
                desc: "Сьогодні ви не зможете успішно змагатися з конкурентами, якщо не маєте корпоративного сайту. До того ж, за допомогою такого ресурсу ви суттєво оптимізуєте велику частину бізнес-процесів. А ми вам в цьому допоможемо.",
                listOfSerc: "Список послуг",
                firstTitle: "Переваги бізнес-сайту",
                firstDesc:
                  "Зацікавилися у цій послузі, але ще вагаєтеся? Давайте детальніше розглянемо, які конкретно переваги та можливості відкриває корпоративний сайт:",
                secondTitle: "Що таке бізнес-сайт і чому він важливий?",
                secondDesc:
                  "Бізнес-сайт - це багатосторінкова онлайн-платформа, створена з метою представлення вашого бренду та досягнення бізнес-цілей. Незалежно від того, чи ви продаєте товари, послуги чи прагнете встановити міцний онлайн-присутність, бізнес-сайт є ключовим.",
                threTitle: "Наша послуга розробки бізнес-сайту",
                threDesc:
                  "Щодо інших особливостей, то у функціоналі сайта обов'язково буде система облікових записів для співробітників із різними правами доступу, можливостями та повноваженнями. За допомогою акаунтів працівники зможуть вносити зміни у функціонал та збирати статистику. Додатково в ресурс можна вбудувати маркетплейс та інструменти для формування Бази Даних клієнтів.",
                threFirst:
                  "Підтримка іміджу та зміцнення бренду. Бізнес, націлений на розвиток, повинен мати репутацію та «обличчя». Це досягається за рахунок публікації новин та унікального візуального стилю.",
                threSecond:
                  "Залучення нових партнерів та клієнтів. У цьому допоможуть форма онлайн-чату та статті із інформацією про вашу компанію та її діяльність.",
                threThre:
                  "Додаткова можливість реклами послуг. Сайт для бізнесу має містити розділи з докладними описами послуг, які надає компанія. Остаточно переконати зможуть окремий інформаційний блок для партнерів та реальні відгуки від задоволених клієнтів.",
                threFour:
                  "Пошук нових робітників. Як показує практика, люди, які не мають релевантного досвіду та щирого бажання, не шукають роботу на веб-ресурсі конкретної фірми. Окрім того, кандидати, що приходять до вас через бізнес-сайт, є більш інформованими щодо специфіки діяльності компанії.",
                fourTitle:
                  "Особливості створення якісного корпоративного ресурсу",
                fourDesc:
                  "Розробка сайту для бізнесу ведеться згідно з певними стандартами. Ось що відрізняє ефективний та простий у користуванні корпоративний ресурс:",
                fourFirst:
                  "Зручна структура. Сторінки та розділи мають бути організовані послідовно, логічно, згідно з чіткою ієрархією. Тоді він більше подобатиметься користувачам і, як наслідок, ефективніше справлятиметься зі своїми цілями. Правильна організація сторінок спрощує користувачам взаємодію з ресурсом.",
                fourSecond:
                  "Відповідність дизайну сучасним трендам та стилю бренда. Сьогодні люди звикли до якісних, стильних, приємних у користуванні інтерфейсів від Google та Apple. Хороший ресурс повинен виглядати сучасно і, водночас, відображати у собі унікальний корпоративний стиль компанії, органічно поєднуватися з рекламною продукцією бренду — флаєрами, буклетами, каталогами, упаковками тощо.",
                fourThre:
                  "Адаптація до мобільних пристроїв та висока швидкість завантаження. Сьогодні величезна кількість користувачів майже не виходить у мережу Інтернет з комп'ютера. Але багато хто частіше використовує ПК для важливих справ. Тому сторінки ресурсу мають коректно відображатися на всіх пристроях, незалежно від діагоналі та роздільної здатності. Не менш важливою є швидкість відображення контенту. За статистикою, 60% користувачів одразу уходять, якщо сторінка  завантажується довше, ніж 3 секунди.",
                fourDescTwo:
                  "Серед інших важливих критеріїв визначення якості слід відмітити мультимовність, надійність хостингу, інформативність розміщеного контенту та достатність функціоналу. Щоб отримати корпоративний web-ресурс, який повністю відповідатиме сучасним стандартам та принесе користь вашому бізнесу, звертайтеся у WebUi-Studio.",
              },
              store: {
                title: "Розробка та створення інтернет-магазину під ключ",
                desc: "Розробка інтернет-магазину — це перевірений та надійний спосіб розширення клієнтської бази, який завжди актуальний для власників бізнесу, що прагнуть досягти більшого.",
                listOfSerc: "Список послуг",
                firstTitle: "Що має бути в онлайн-магазині?",
                firstDesc:
                  "Створення інтернет-магазину передбачає інтеграцію стандартних для маркетплейсів функцій, таких як автозаповнення, збереження історії запитів, автопідбір пропозицій, система формування акаунтів покупців, кошик для незареєстрованих користувачів та багато іншого. А якщо казати про структуру, то в ІМ, крім головної сторінки, має бути ще кілька важливих розділів, а саме:",
                secondTitle: "Що таке інтернет-магазин і чому він важливий?",
                secondDesc:
                  "Інтернет-магазин - це електронний магазин, створений для зручних та прибуткових онлайн-продажів. Незалежно від того, чи продаєте ви товари, послуги або шукаєте збільшити клієнтську базу - інтернет-магазин допоможе вам досягти мети.",
                threTitle: "Наша послуга розробки інтернет-магазину",
                threDesc:
                  "Також можна завести окремі сторінки для контактних даних, акцій та знижок. А взагалі кількість розділів може бути більшою або меншою, в залежності від побажань замовника. Скільки б сторінок ви не хотіли мати у своєму web–ресурсі, звертайтеся до WebUi-Studio, коли вам знадобиться створення інтернет-магазину, ціна якого приємно здивує.",
                threFirst:
                  "Каталог. Тут розміщуються та групуються усі картки товарів. Дуже важливо, аби він мав зручну для користувачів систему пошуку з фільтрами за цінами, популярністю, категоріями, брендами, рейтингами, розмірами, кольорами тощо.",
                threSecond:
                  "Про нас. Сторінка або група сторінок, де буде викладена вичерпна інформація про ІМ, історію його створення, особливості та переваги. Також варто описати загальні переваги товарів, які ви реалізуєте — наприклад, що продукцію вироблено вами на власних потужностях чи надано надійними партнерами та ви на 100% гарантуєте її якість.",
                threThre:
                  "Оплата та доставка. Слід надати клієнту докладну інформацію про те, яким чином він може розрахуватися за товари та отримати замовлення. Ця інформація відображатиметься також при оформленні покупки, але в спеціальному розділі її можна подати розгорнутіше.",
                threFour:
                  "Обмін та повернення. Дуже важливо, щоб клієнт знав, як проходить процедура повернення товару, що йому потрібно для цього зробити. Хоч покупки в ІМ стали для людей звичними, вони досі відчувають певну тривогу, пов'язану із тим, що товар прийде пошкодженим, неякісним. Тому в цьому розділі бажано не просто чітко описати, як проходять обмін та повернення, а і запевнити клієнта, що навіть якщо виникнуть якісь складнощі через провину ІМ, постачальника або перевозника, то все буде стовідсотково вирішено на користь покупця.",
                threFive:
                  "Блог. Цей розділ стане додатковим джерелом трафіку. Публікуйте в ньому цікаву інформацію, що стосується вашої ніші та окремих груп товарів. Наприклад, якщо у вашому асортименті є смартфони, можна викладати в блозі у тому числі новини ринку мобільних гаджетів та корисні поради щодо їх вибору, експлуатації, налаштування.",
                threSix:
                  "Контакти. Надайте користувачам всю контактну інформацію, щоб вони були впевнені в тому, що з вами завжди можна зв'язатися по цікавлячим їх питанням.",
                fourTitle: "Як ми розробляємо онлайн-маркети",
                descTwo:
                  "Вартість створення інтернет магазину складається з цілого комплексу робіт, які ми виконуємо поетапно. Але вам не треба буде платити за кожен етап окремо. Після оцінки обсягів ми назвемо фіксовану суму, в яку буде входити абсолютно все. Основні етапи виконання замовлення:",
                fourDesc:
                  "Наша команда професіоналів має багаторічний досвід у розробці лендінгів різної складності. Ми пропонуємо:",
                fourFirst:
                  "Створення технічних завдань та формування прототипу.",
                fourSecond: "Розробка дизайну веб-ресурсу.",
                fourThre:
                  "Програмування та налаштування усіх необхідних компонентів.",
                fourFour: "Тестування та остаточний запуск.",
                descThre:
                  "Після того, як маркетплейс буде запущено, ми деякий час супроводжуватимемо його для надання технічної підтримки. Окрім того, ІМ — це завжди величезна кількість текстів. Йому потрібні описи для всіх карток товарів, брендів та категорій, статті для блогу та інших сторінок. І чим ширший асортимент, тим більше текстового контенту знадобиться замовити. Але вам не треба буде усім цим перейматися, адже ми робимо інтернет-магазини під ключ. Тож оформіть заявку у нас на сайті або замовте зворотній дзвінок, і дуже скоро ваш бізнес почне підкоряти інтернет-простір. WebUi-Studio із радістю допоможе вам створити свій інтернет-магазин!",
              },
              web: {
                title: "Розробка мобільних додатків під ключ",
                desc: "Смартфони стали невід'ємною частиною життя сучасної людини. Саме тому розробка мобільних додатків — це перспективний напрямок розвитку для будь-якого бізнесу. А фахівці WebUi-Studio вам в цьому допоможуть.",
                listOfSerc: "Список послуг",
                firstTitle: "Користь мобільного додатку",
                firstDesc:
                  "Не слід опускати руки, коли у вас немає ідей для унікального продукту, який швидко захопить світовий ринок, як це було з Instagram та TikTok. Якщо у вас є власний бізнес, то розробка Андроїд додатків може принести йому чимало користі. Ми здатні запропонувати рішення, що допоможуть розвитку підприємства майже у будь-якій ніші.",
                secondTitle: "Що таке веб-додатки і чому вони важливі?",
                secondDesc:
                  "Веб-додаток - це інтерактивний онлайн-ресурс, створений для вирішення конкретних завдань. Не важливо, чи ви плануєте автоматизувати бізнес-процеси, створити онлайн-магазин або підвищити залучення клієнтів - веб-додаток допоможе вам досягти вашої мети.",
                threTitle:
                  "Ось чим може допомогти вам власний програмний продукт для смартфонів:",
                threDesc:
                  "Тож коли ви вже перестали вагатися і зрозуміли, яку користь можете отримати, то оформіть замовлення на ПО прямо зараз, на нашому сайті. Створення додатку на Андроїд — послуга, яку варто замовити саме у WebUi-Studio, якщо ви бажаєте отримати дійсно якісний продукт.",
                threFirst:
                  "Підвищення лояльності клієнтів. Навіть якщо у вас є власний сайт, через який ви вже продаєте послуги чи товари, замовнику значно зручніше буде запустити застосунок, ніж шукати веб-ресурс через браузер.",
                threSecond:
                  "Появлення нового каналу для продажів. У вас можуть з'явитися нові клієнти з числа користувачів AppStore. Підвищиться рівень впізнаваності вашого бренду, що також позитивно вплине на продажі.",
                threThre:
                  "Автоматизація бізнес-процесів. За допомогою додатку можна оптимізувати логістику, контроль певних процесів та управління ними, що у свою чергу призведе до підвищення їх ефективності. Завдяки цьому вдасться суттєво зекономити на персоналі, якому в іншому випадку довелося б доручати виконання цих задач.",
                threFour:
                  "Покращення іміджу. Фірма, яка має власний застосунок, здається споживачу більш надійною. На фоні клієнтів, в яких немає своєї програми для мобільних пристроїв, ви станете помітнішими.",
                threFive:
                  "Покращення якості комунікації з клієнтами. Завдяки додатку ви залишаєтеся на зв'язку з клієнтом 24/7, доки в нього присутнє з'єднання із мережею Інтернет. На відміну від сайту, застосунок попадається на очі користувачу кожний раз, коли той розблоковує екран пристрою.",
                fourTitle: "Технології та платформи, які ми використовуємо",
                fourDesc:
                  "Найпопулярніша ОС для мобільних пристроїв сьогодні — Android. Тому в переважній більшості випадків ми працюємо саме з нею. Оскільки на Google Play щоденно додаються тисячі нових продуктів, до розробки слід підходити вкрай відповідально, щоб витримати конкуренцію. Ми враховуємо основні тенденції на ринку, а також те, що на Андроїд працює велика кількість пристроїв різної потужності, з неоднаковими екранами та версіями ОС. Тож робимо застосунок максимально адаптивним, приділяємо багато уваги тестуванню. Забезпечуємо підтримку не тільки сучасних, а і старих версій операційної системи. Не забуваємо і про безпеку користувачів — застосовуємо сучасні методи біометричної аутентифікації та шифрування. Якщо вам знадобиться розробка мобільних додатків, ціна яких повністю виправдана якістю, то звертайтеся до нас. Що стосується найпоширеніших мов програмування для смартфонів на Андроїд, то це:",
                fourFirst:
                  "Java. Дозволяє виконувати процедурне або об'єктно-орієнтоване програмування.",
                fourSecond:
                  "Kotlin. Ефективна, безпечна та зручна мова. Признана компанією Google офіційною мовою розробки ПО під системи Андроїд.",
                fourThre:
                  "React Native. Фреймворк, за допомогою якого можна створювати програми не тільки під Android, а і під iOS чи Windows.",
                descPoT:
                  "Вартість розробки мобільного додатку залежить від складності задачі. Також має значення, скільки часу витрачено на вирішення задач. Але вам не варто хвилюватися: у контракті, що ми підпишемо перед початком робіт, буде прописано точну суму, яка не зміниться до самого завершення розробки.",
              },
              crm: {
                title: "Інтеграція CRM систем під ключ",
                desc: "Автоматизація бізнес-процесів — це те, без чого вам не вдасться обігнати конкурентів. CRM-система значно спрощує керування фірмою, а також сприяє більш чіткому та оперативному налагодженню взаємодії з клієнтами.",
                listOfSerc: "Список послуг",
                firstTitle: "Чому треба інтегрувати CRM?",
                firstDesc:
                  "Перш за все такі системи потрібні інтернет-магазинам. Але навіть якщо ви ще не ведете бізнес через веб-ресурси, CRM буде вам корисною.",
                secondTitle: "Що таке Інтеграція CRM і чому вона важлива?",
                secondDesc:
                  "Інтеграція CRM включає об'єднання систем управління відносинами з клієнтами з процесами вашого бізнесу для підвищення ефективності. Незалежно від того, чи ви керуєте взаємодією з клієнтами, оптимізуєте продажі або покращуєте маркетингові стратегії, інтеграція CRM допомагає досягти ваших цілей.",
                threTitle:
                  "Ось які позитивні ефекти ви отримаєте від впровадження CRM:",
                threDesc:
                  "Тож якщо ви бажаєте отримати стандартизовану базу контактів клієнтів та партнерів і більш ефективно контролювати якість роботи відділу продажів, то годі вагатися! Замовляйте CRM для бізнесу в WebUi-Studio прямо зараз.",
                threFirst:
                  "Підвищення продуктивності підприємства. Зменшується витрата ресурсів на вирішення багатьох задач, оптимізується використання співробітниками робочого часу, знижується рівень витрат на персонал. Цього вдається досягти за рахунок того, що багато процесів, які потребували уважного контролю, завдяки CRM проходять автоматично.",
                threSecond:
                  "Покращення взаємодії зі споживачами. Забезпечення швидкої обробки замовлень, звернень та будь-яких запитів від користувачів, які купують ваші послуги та товари. Завдяки підвищенню якості обслуговування ви стабільно розширюватимете коло постійних клієнтів, збільшуватимете лояльність аудиторії.",
                threThre:
                  "Отримання детальних аналітичних даних. Система автоматично збиратиме докладну інформацію щодо продажів, клієнтів та дій співробітників. Спираючись на ці дані, керівництво зможе приймати більш вдалі рішення, які сприятимуть розвитку компанії. Просування послуг та продуктів, а також керування їх реалізацією виконуватимуться значно краще, завдяки чому прибуток компанії помітно зросте.",
                fourTitle: "Із чим можна інтегрувати CRM?",
                fourDesc:
                  "Система здатна вирішувати безліч задач. Але якщо узагальнити, то інтегрувати її можна із наступними структурами:",
                fourDescTwo:
                  "Можливо, ви ще не знаєте, що з цього може знадобитися конкретно вам. Але спеціалісти WebUi-Studio допоможуть визначитися. Зв'яжіться з нами або замовте зворотній дзвінок, і ми з радістю надамо вичерпну консультацію щодо інтеграцій CRM для малого бізнесу чи великої компанії.",
                fourFirst:
                  "Корпоративний сайт або лендінг. З CRM можна відправляти дані наскрізної аналітики, лідів, getcall, e-mail tracking та досліджувати їх. У вас з'явиться можливість детально аналізувати ефективність інвестицій у маркетинг, відстежуючи повний шлях клієнта, починаючи від перегляду рекламного оголошення і закінчуючи продажами, у тому числі повторними.",
                fourSecond:
                  "Інтернет-магазин. CRM для інтернет-магазину дозволить виконувати обмін замовленнями, актуалізувати рештки товарів та вартість, керувати акціями, програмою лояльності та рефералами.",
                fourThre:
                  "Система обліку. Можна синхронізувати дані про замовлення клієнтів, підключити інформаційні повідомлення та техпідтримку по замовленнях.",
                fourFour:
                  "Сервіси розсилання. Система допоможе відправляти контакти у сервіси розсилання e-mail та смс, щоб потім надсилати системні повідомлення споживачам та вивантажувати статистику.",
                fourFive:
                  "Сервіси анатілики. CRM для магазину або будь-якої іншої вашої структури збиратиме дані, кваліфікуватиме ліди, а потім відправлятиме інформацію до сервісів и отримуватиме результат.",
                fourSix:
                  "IP-телефонія. Завдяки інтеграцією з чимось на кшталт Ringostat або Binotel можна налаштувати 2-сторонній обмін, щоб створювати контакти, назначати відповідальних за обслуговування та відправляти UTM-мітки.",
              },
              design: {
                title: "Дизайн сайту на замовлення за найкращою ціною",
                desc: "Веб-ресурс — це обличчя вашого бізнесу. Саме тому розробка дизайну сайту є одним з найважливіших етапів у створенні бренду та формуванні позитивного іміджа вашої компанії.",
                listOfSerc: "Список послуг",
                firstTitle: "Навіщо потрібен індивідуальний дизайн?",
                firstDesc:
                  "У мережі Інтернет можна знайти безкоштовні або вкрай дешеві шаблонні варіанти дизайну для сайтів. Їх має сенс використовувати, коли у вашого підприємства екстремально малий бюджет або якщо обмаль часу і проект має бути готовий на завтра-післязавтра.",
                secondTitle: "Що таке дизайн веб-сайту і чому він важливий?",
                secondDesc:
                  "Дизайн веб-сайту включає створення естетично привабливого та функціонального інтерфейсу для забезпечення позитивного користувацького досвіду. Незалежно від того, чи ви розробляєте особистий сайт, корпоративний портал чи онлайн-магазин, дизайн грає важливу роль у взаємодії з вашою аудиторією.",
                threTitle:
                  "У будь-яких інших випадках слід обирати тільки індивідуальний дизайн сайтів. Ось його ключові плюси:",
                threDesc:
                  "В результаті ви отримаєте персоналізований, унікальний дизайн. Він ефективно сприятиме збільшенню продажів, підвищенню конверсії та впізнаваності бренду. Ще одним важливим компонентом якісного дизайна є адаптивність. Дизайн сайту, ціна якого дійсно виправдана, має коректно відображатися як на ПК, так і на екранах мобільних пристроїв, незалежно від роздільної здатності та довжини діагоналі дисплея.",
                threFirst:
                  "Відображення усіх переваг ваших товарів, послуг та бренда в цілому в кожній дрібниці;",
                threSecond:
                  "Цікаві рішення, в яких враховуються особливості саме вашої цільової аудиторії;",
                threThre:
                  "Максимально індивідуальний підхід, можливість реалізувати майже будь-які ваші особисті ідеї та побажання.",
                fourTitle: "Етапи виконання проекту",
                fourDesc:
                  "Розробляти дизайн сайту починають відразу після обговорення всіх подробиць із замовником та підписання контракту. Робота складається з декількох стадій:",
                fourDescTwo:
                  "Майте на увазі, що створення дизайну — це окрема послуга. Після того, як буде розроблено веб-дизайн сайту, ресурс ще не стане готовим до запуску. Знадобиться наповнити його контентом та виконати SEO-просування. Але не хвилюйтеся, бо WebUi-Studio надає повний спектр послуг у цій сфері і, якщо потрібно, ви отримаєте повноцінний сайт під ключ, а не тільки дизайн.",
                fourFirst:
                  "Складання технічного завдання для спеціалістів. Усе, що було обговорено із замовником, детально описується у вигляді чітких задач. Також вказуються критерії визначення якості виконання ТЗ.",
                fourSecond:
                  "Формування плану структури. Незалежно від типу сайту, кожний дизайн складається з деяких основних компонентів, які є і в лендингах, і в інтернет-магазинах, і в будь-яких інших якісних ресурсах. До них відносяться кольорова гама, футер і хедер (верхній та нижній сегменти із логотипом та інформацією), меню та інструменти навігації, шрифти, наповнення (тексти, зображення тощо) а також статичні та рухливі елементи, стилі відображення віртуальних кнопок, форм та значків.",
                fourThre:
                  "Створення макету. Дизайнер робить начерки, а потім візуалізує все, що заплановано, згідно із ТЗ. Коли макети всіх основних сторінок готові, їх відправляють замовнику, і той стверджує результат, а якщо захоче -- додає якісь зауваження, згідно із якими потім внесуть поправки.",
                fourFour:
                  "Програмування, верстка. Коли макет остаточно затверджено, його надсилають веб-розробникам. Ті у свою чергу роблять повноцінний, робочий web-сайт, готовий до запуску або наповнення контентом.",
              },
              aboutUs: {
                title: "Переваги співпраці з WebUi-Studio",
                mainDesc:
                  "Веб-студія WebUi-Studio — це згуртована команда спеціалістів, яка професійно створює та просуває веб-ресурси будь-яких видів. Щоб переконатися у цьому, зв'яжіться із нами будь-яким зручним для вас способом та замовте відповідну послугу.",
                firstText:
                  "Ми - творці інноваційних і вражаючих веб-рішень, завдяки яким ваш бізнес розвивається та стає більш доступним у світі онлайн. Наша команда згуртованих професіоналів має багаторічний досвід у розробці веб-сайтів та додатків, що надає нам впевненість у здатності досягати максимальних результатів для вас.",
                secondTitle: "Наша мета",
                secondDesc:
                  "Ми віримо, що веб-простір - це не просто інтернет, а можливість створити місце для вашого бренду, де кожен клієнт відчує вашу унікальність і професіоналізм. Ми прагнемо розуміти ваші потреби та цілі, а потім перетворювати їх у креативні та ефективні веб-рішення.",
                misionTitle: "Наша місія",
                misionDesc:
                  "Забезпечити вашому бізнесу інструменти, які допоможуть вам зростати та досягати успіху у цифровому віці. Ми віримо в те, що дизайн та технологія мають змінювати світ, і ми працюємо, щоб зробити цей світ кращим для вас та вашого бізнесу.",
                first:
                  "Якщо у вас вже є сайт, але ви незадоволені його позиціями у видачах пошукових систем, кількістю відвідувачів чи покупців, то ми ретельно вивчимо недоліки ресурса та виправимо їх. Вже за кілька місяців ви побачите суттєвий позитивний ефект, що відображатиметься у реальних показниках.",
                second:
                  "Ми робимо презентабельні та зручні у використанні web-ресурси, що однаково коректно відображаються в будь-яких браузерах та на будь-яких пристроях. Саме тому вашим відвідувачам буде зручно користуватися сайтом, що стане додатковою мотивацією для замовлення вашої послуги або товару.",
                thre: "Ми пропонуємо створення сайтів під ключ, а не виконання окремих задач. Це дуже зручно для клієнта, бо не потребує від нього жодних зусиль. Що б вам не знадобилося — блог, інтернет-магазин чи корпоративний ресурс, ми розробимо його з нуля та виведемо на високі позиції серед веб-сайтів вашої ніші.",
                four: "Ми розробляємо застосунки для смартфонів на ОС Android таким чином, щоб вони приносили чимало користі вашому бізнесу. Якщо ж у вас є власні ідеї щодо додатку, ми готові їх реалізувати.",
                tOne: "Хто працюватиме над вашим проектом",
                tTwo: "За кожний напрямок робіт відповідає окремий спеціаліст, іноді — група співробітників. У більшості випадків виконання задач розподіляється на наступних учасників команди:",
                tThre:
                  "Веб-програмісти. Виконують безпосередню розробку та подальше обслуговування web-ресурсів. Відповідають за технічні аспекти.",
                tFour:
                  "Дизайнери. Розробляють візуальну складову сайтів. Знаходять найкращі варіанти реалізації бачення замовника, враховуючи актуальні галузеві тенденції та стандарти.",
                tFive:
                  "SEO-спеціалісти. Займаються розкруткою сайту, щоб його відвідувало якомога більше представників вашої цільової аудиторії. Також відповідають за наповнення ресурсу текстовим контентом.",
                tSix: "Android-розробники. Створюють для вас мобільні додатки такими, щоб вони були безпечними для користувачів, ефективними та конкурентоспроможними на ринку.",
                tSeven:
                  "Студія створення сайтів WebUi-Studio працює якісно та відповідально. Ми ніколи не виходимо за межі контракту та не вимагаємо від клієнтів додаткових доплат. Якщо у вас з'явилися якісь питання — зв'яжіться з нами, і ми залюбки на них відповімо.",
              },
              ab: {
                title: "Наші контакти",
                adr: "Україна, Львів",
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
