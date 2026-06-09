/* ════════════════════════════════════════════════════════════
   lang.js — Moteur bilingue FR / EN pour Lotus d'Enfance
   Le français est la source dans le HTML ; l'anglais vit ici.
   ════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ---------- Dictionnaire DOM : clé → texte ANGLAIS ----------
     (le texte français reste dans le HTML, marqué par data-i18n*) */
  var EN = {
    /* — Méta / SEO — */
    "meta.title": "Lotus d'Enfance – Humanitarian association for the children of Vietnam",
    "meta.description": "Lotus d'Enfance is a French non-profit (loi 1901) helping disadvantaged children in Vietnam: access to education, daily meals, charity bingo. Join our cause!",

    /* — Navigation — */
    "nav.association": "The Association",
    "nav.actions": "Our Actions",
    "nav.agenda": "Events",
    "nav.agir": "Take action",
    "nav.support": "💛 Support us",
    "nav.shop": "👕 Shop",
    "nav.catalogue": "🛍️ Full catalogue",
    "nav.donate": "❤ Donate",
    "nav.contact": "Contact",

    /* — Hero — */
    "hero.badge": "Non-profit association · Loi 1901",
    "hero.title": "Together, let's build a future<br /><em>for the children of Vietnam</em>",
    "hero.desc": "Lotus d'Enfance works to improve the living conditions of disadvantaged children through access to education and healthy food.",
    "hero.donate": "❤ Donate",
    "hero.discover": "Discover the association",
    "hero.quote": "\"Two essential needs to build a dignified future full of hope: education and healthy food.\"",
    "hero.author": "— Thi Koyuncu, founder",

    /* — Chiffres clés — */
    "stats.children": "Children supported",
    "stats.meals": "Meals distributed",
    "stats.villages": "Villages and neighbourhoods helped",
    "stats.funds": "% of funds sent on site",

    /* — Qui sommes-nous — */
    "about.badge": "Our story",
    "about.title": "Who are we?",
    "about.subtitle": "An association born from a sincere commitment to disadvantaged children",
    "about.p1": "<strong>Lotus d'Enfance</strong> is a non-profit association governed by the French law of 1 July 1901, founded by <strong>Thi Koyuncu</strong>, whose commitment to disadvantaged children in Vietnam began as a fundraising campaign before becoming a fully-fledged association.",
    "about.p2": "Our mission is clear: <em>to improve the living conditions of the most vulnerable children through two fundamental levers</em> — access to education and to a balanced diet. These two essential needs are the foundation on which every child can build a dignified future full of hope.",
    "about.p3": "Our work focuses on the villages and precarious neighbourhoods of Vietnam, where the needs are greatest. Thanks to our volunteers and local partners, every euro collected is used entirely on site.",
    "about.value1.t": "Transparency",
    "about.value1.d": "100% of donations go directly to the beneficiaries",
    "about.value2.t": "Local roots",
    "about.value2.d": "Our volunteers and partners are based in Vietnam",
    "about.value3.t": "Solidarity",
    "about.value3.d": "Every child deserves an equal chance to thrive",
    "about.founder.role": "Founder of the association",
    "about.founder.desc": "Driven by her attachment to disadvantaged children in Vietnam, Thi turned her personal commitment into a structured association, able to act durably to improve lives.",

    /* — Nos actions — */
    "actions.badge": "What we do",
    "actions.title": "Our Actions",
    "actions.subtitle": "Three areas of intervention for a lasting impact on children's lives",
    "actions.edu.t": "Access to education",
    "actions.edu.p": "We provide children with the tools essential to their schooling: notebooks, pens, school uniforms, books and other supplies. Because education is the first step towards a better future.",
    "actions.edu.l1": "Complete school supplies",
    "actions.edu.l2": "Uniforms and suitable clothing",
    "actions.edu.l3": "Books and educational materials",
    "actions.food.t": "Healthy food",
    "actions.food.p": "Malnutrition remains a major obstacle to the development of many children. We fund balanced meals for malnourished children so they can grow up healthy and stay in school.",
    "actions.food.l1": "Daily nutritious meals",
    "actions.food.l2": "Fighting malnutrition",
    "actions.food.l3": "Monitoring of beneficiary children",
    "actions.family.t": "Support for families",
    "actions.family.p": "We support the most vulnerable families in the villages and precarious neighbourhoods of Vietnam, in order to create a stable environment conducive to their children's development.",
    "actions.family.l1": "Direct aid to families",
    "actions.family.l2": "Intervention in isolated villages",
    "actions.family.l3": "Coordination with local partners",
    "actions.cta": "Your donations directly fund these actions on the ground.",
    "actions.cta.btn": "❤ Support our actions",

    /* — Comment ça marche — */
    "how.badge": "Transparency",
    "how.title": "How do your donations work?",
    "how.subtitle": "A simple, direct and fully transparent process",
    "how.s1.t": "You give",
    "how.s1.p": "You make a secure donation via our HelloAsso page in just a few clicks.",
    "how.s2.t": "We collect",
    "how.s2.p": "The funds are centralised and managed by the association with full transparency.",
    "how.s3.t": "We act",
    "how.s3.p": "100% of the funds are sent to our volunteers and local partners in Vietnam.",
    "how.s4.t": "Children benefit",
    "how.s4.p": "Supplies, meals and support reach children in need directly.",

    /* — Soutenir — */
    "support.badge": "Act alongside us",
    "support.title": "How to support us?",
    "support.subtitle": "Several ways to contribute to our mission, according to your wishes and means",
    "support.events.t": "Take part in our events",
    "support.events.p": "Each year, Lotus d'Enfance organises friendly charity evenings open to all. Our charity bingo gathered more than <strong>150 participants</strong> in a packed hall, hosted by our passionate volunteers. Between laughter, suspense and generosity, these evenings are above all moments of sharing that move our cause forward.",
    "support.events.btn": "See our upcoming events →",
    "support.donate.t": "Make a direct donation",
    "support.donate.p": "Can't make it but still want to help? Donate online in a few clicks via our secure HelloAsso page. Every cent goes entirely to the children of Vietnam. A tax receipt will be sent to you automatically.",
    "support.donate.btn": "❤ Donate now",
    "support.shop.t": "Buy a solidarity item",
    "support.shop.p": "Every purchase from our Lotus d'Enfance collection is a concrete gesture of solidarity. T-shirts, parkas, backpacks, tote bags… Wear our colours and directly fund our field projects in Vietnam.",
    "support.shop.btn": "Discover the shop →",

    /* — Agenda — */
    "agenda.badge": "Agenda & News",
    "agenda.title": "Our events",
    "agenda.subtitle": "Join us at our next charity gatherings",
    "agenda.past.month": "May 2026",
    "agenda.next.month": "Upcoming",
    "agenda.past.tag": "Past",
    "agenda.past.t": "🎰 Charity Bingo",
    "agenda.past.p": "A warm and festive evening for the benefit of the children of Vietnam, with more than 150 participants gathered in good spirits. Thank you all for your generosity and your presence!",
    "agenda.next.tag": "Coming soon",
    "agenda.next.t": "📣 Next event",
    "agenda.next.p": "Stay tuned! Our next charity event will be announced very soon on this page and on our Facebook page.",
    "agenda.next.link": "Follow on Facebook →",
    "agenda.news.t": "Follow our news",
    "agenda.news.p": "To keep up with all our actions and events, follow us on Facebook.",
    "agenda.news.btn": "Our Facebook page",

    /* — Boutique (accueil) — */
    "shop.badge": "Solidarity & style",
    "shop.title": "Lotus d'Enfance Shop",
    "shop.subtitle": "Every purchase directly funds our projects in Vietnam · Made to order · Free delivery",
    "shop.perm.title": "🟢 Permanent collection",
    "shop.tshirt": "Short-sleeve T-shirt",
    "shop.parka": "Parka",
    "shop.cap": "Cap",
    "shop.backpack": "Backpack",
    "shop.impact.tshirt": "i.e. 2 weeks of balanced meals",
    "shop.impact.parka": "i.e. 5 weeks of meals for a child",
    "shop.impact.cap": "i.e. 2 weeks of balanced meals",
    "shop.impact.backpack": "i.e. 3 weeks of meals for a child",
    "shop.banner.count": "articles",
    "shop.banner.strong": "Much more in our full catalogue!",
    "shop.banner.p": "Bucket hat, big-logo T-shirt, 500 ml flask (4 colours), tote bag, shoulder bag, mini handbag, card holder, mini keyring, flashlight, wine glasses… Discover all our solidarity items.",
    "shop.banner.btn": "View the catalogue",
    "shop.viet.badge": "🌟 Limited collection",
    "shop.viet.title": "Vietnam 2026",
    "shop.viet.desc": "<strong>Mission 2026 — €1 = 1 meal.</strong><br />Our limited collection dedicated to our 2026 field mission. Every item sold directly funds a meal for a child in Vietnam. Wear the collection, change a life.",
    "shop.viet.parka": "Black parka",
    "shop.viet.cap": "Cap",
    "shop.viet.bag": "Shoulder bag",
    "shop.viet.card": "Card holder",
    "shop.viet.impact.parka": "i.e. 75 meals offered to children",
    "shop.viet.impact.cap": "i.e. 25 meals for a child",
    "shop.viet.impact.bag": "i.e. 1 month of meals for a child",
    "shop.viet.impact.card": "i.e. 25 meals for a child",
    "shop.event.strong": "Also available at our events!",
    "shop.event.p": "All our goodies are sold directly at our stand during each charity evening. Come and discover and try the collection for real — it's also a chance to meet us!",
    "shop.cta.p": "📦 Made to order · Free delivery · 100% of profits go to the association",
    "shop.cta.catalogue": "View the full catalogue",
    "shop.cta.email": "Order by email",

    /* — Remerciements — */
    "thanks.badge": "Gratitude",
    "thanks.title": "A huge thank you 🙏",
    "thanks.intro": "Every action of Lotus d'Enfance exists thanks to you. Volunteers, participants, donors, sponsors — you are the beating heart of our association. Thank you from the bottom of our hearts.",
    "thanks.mairie.t": "To the Town Hall of Ouzouer-sur-Trézée",
    "thanks.mairie.p1": "Our charity bingos could never have gathered more than <strong>700 people</strong> (across several editions) without the precious and generous support of the <strong>Town Hall of Ouzouer-sur-Trézée</strong>. Thanks to their warm welcome and the use of their municipal hall, we were able to organise dignified, festive evenings entirely dedicated to our cause.",
    "thanks.mairie.p2": "This partnership is much more than logistics: it reflects a local solidarity that gives full meaning to our actions. Knowing that our town believes in our mission encourages us to go even further for the children of Vietnam.",
    "thanks.mairie.sign": "— Thi Koyuncu & the whole Lotus d'Enfance team ❤",
    "thanks.vol.t": "Our volunteers",
    "thanks.vol.p": "They give their time, energy and heart without counting. Present at every event to welcome, host, set up and tidy, our volunteers are the soul of the association. Without them, nothing would be possible. <strong>Thank you so much.</strong>",
    "thanks.part.t": "Our participants",
    "thanks.part.p": "Every person who walks through the door of our evenings directly contributes to changing the life of a child in Vietnam. Your presence, your good mood and your enthusiasm make every event unique and unforgettable. <strong>Thank you for being there.</strong>",
    "thanks.donors.t": "Our donors",
    "thanks.donors.p": "Whether it's a first donation or faithful support since our beginnings, every act of generosity has a concrete and measurable impact on the ground. Thanks to you, children eat, learn and grow up with dignity. <strong>Thank you for your trust.</strong>",
    "thanks.sponsors.t": "Our sponsors & partners",
    "thanks.sponsors.p": "Their financial and material support amplifies our ability to act. By joining our cause, they show a solidarity commitment that goes far beyond a simple partnership. Together, we build a better future. <strong>Thank you for your commitment.</strong>",
    "thanks.sponsors.l1": "🏦 <strong>CIC Montereau-Fault-Yonne (77)</strong> — Financial support",
    "thanks.sponsors.l2": "🔊 <strong>Stars Europe Briare (45)</strong> — Sound equipment",
    "thanks.sponsors.l3": "🛒 <strong>Super U Bonny-sur-Loire (45)</strong> — Prizes",
    "thanks.sponsors.l4": "💎 <strong>Crypto.com</strong> — Sponsor partner",
    "thanks.sponsors.open": "We are open to any partnership and sponsorship. Does your company want to support a concrete cause? <strong>Contact us</strong>, as Crypto.com did before you.",

    /* — Don — */
    "donate.badge": "Act now",
    "donate.title": "Make a donation,<br />change a life",
    "donate.p": "Every donation, whatever the amount, has a direct and concrete impact on the life of a child in Vietnam. Thanks to your generosity, we can keep acting every day.",
    "donate.i1": "<strong>€5</strong> — a notebook and pens for a child",
    "donate.i2": "<strong>€10</strong> — a week of balanced meals",
    "donate.i3": "<strong>€30</strong> — a complete school outfit",
    "donate.i4": "<strong>€50</strong> — a month of full support for a child",
    "donate.card.t": "Donate online",
    "donate.card.p": "Secure platform · Tax receipt available",
    "donate.card.btn": "I donate via HelloAsso",
    "donate.card.note": "🔒 100% secure payment<br />📄 Tax receipt for deductions",

    /* — Contact — */
    "contact.badge": "Write to us",
    "contact.title": "Contact",
    "contact.subtitle": "A question, a wish to get involved? We'll be happy to reply.",
    "contact.email.t": "Email",
    "contact.fb.t": "Facebook",
    "contact.status.t": "Legal status",
    "contact.status.d": "Non-profit association (loi 1901)",
    "contact.online.t": "Online donations",
    "contact.form.name": "Full name *",
    "contact.form.name.ph": "Your name",
    "contact.form.email": "Email *",
    "contact.form.email.ph": "your@email.com",
    "contact.form.subject": "Subject",
    "contact.form.subject.choose": "Choose a subject",
    "contact.form.subject.don": "Make a donation",
    "contact.form.subject.benevole": "Become a volunteer",
    "contact.form.subject.partenariat": "Partnership",
    "contact.form.subject.info": "Information request",
    "contact.form.subject.autre": "Other",
    "contact.form.message": "Message *",
    "contact.form.message.ph": "Your message...",
    "contact.form.submit": "Send the message",
    "contact.form.success": "✅ Thank you! Your message has been sent. We will reply to you very soon.",
    "contact.form.error": "⚠️ An error occurred while sending. Please try again or email us directly at lotusdenfance@gmail.com.",

    /* — Footer — */
    "footer.brand": "Non-profit association (loi 1901).<br />Acting for disadvantaged children in Vietnam.",
    "footer.nav.t": "Navigation",
    "footer.nav.home": "Home",
    "footer.nav.about": "Who are we?",
    "footer.nav.actions": "Our Actions",
    "footer.nav.agenda": "Events",
    "footer.nav.contact": "Contact",
    "footer.act.t": "Take action",
    "footer.act.donate": "Donate",
    "footer.act.volunteer": "Become a volunteer",
    "footer.act.contact": "Contact us",
    "footer.assoc.t": "The association",
    "footer.assoc.story": "Our story",
    "footer.assoc.missions": "Our missions",
    "footer.assoc.transparency": "Financial transparency",
    "footer.bottom.rights": "© 2026 Lotus d'Enfance · Non-profit (loi 1901) · All rights reserved",
    "footer.bottom.legal": "Legal notice",
    "footer.bottom.privacy": "Privacy",
    "footer.bottom.made": "Made with ❤ for the children of Vietnam",
    "fab.donate": "Donate",

    /* ════════ BOUTIQUE (boutique.html) ════════ */
    "b.nav.cart": "Cart",
    "b.nav.donate": "Donate",
    "b.meta.title": "Solidarity shop – Lotus d'Enfance | T-shirts, parkas, goodies",
    "b.hero.badge": "Solidarity shop",
    "b.hero.title": "Wear our colours,<br /><span class=\"text-[#F4B8D1]\">change a life</span>",
    "b.hero.desc": "Add your items to the cart, or order directly <strong class=\"text-white\">by email</strong>. Every purchase funds disadvantaged children in Vietnam.",
    "b.hero.btn.perm": "Permanent collection ↓",
    "b.hero.btn.lim": "Limited collection ↓",
    "b.hero.caption": "Our stand at the charity bingo 🌸",
    "b.topnav.perm": "Permanent collection",
    "b.topnav.lim": "Limited collection",
    "b.topnav.order": "Order",
    "b.topnav.site": "← Site",
    "b.mission.caption": "The Lotus d'Enfance team in the field — <strong class=\"text-[#2D6A4F]\">€1 = 1 meal for a child</strong>",
    "b.how.badge": "Simple & fast",
    "b.how.title": "How to order?",
    "b.how.subtitle": "Two options: directly by email or via the cart.",
    "b.how.s1.t": "Choose",
    "b.how.s1.p": "Browse the collection and click \"Order\" or \"Add to cart\".",
    "b.how.s2.t": "Build your cart",
    "b.how.s2.p": "Add several items, choose size and colour, then check out in one click.",
    "b.how.s3.t": "We get back to you",
    "b.how.s3.p": "A summary email is sent automatically. We confirm and arrange delivery.",
    "b.how.f1": "📦 <strong>Free delivery</strong>",
    "b.how.f2": "🏪 Also available <strong>at our events</strong>",
    "b.how.f3": "💚 <strong>100%</strong> of profits donated",
    "b.perm.badge": "🛍️ Charity events",
    "b.perm.title": "Permanent collection",
    "b.perm.subtitle": "Items available all year round — sold at our charity events",
    "b.lim.badge": "🌟 Loto Vietnam 2026",
    "b.lim.title": "Limited collection",
    "b.lim.desc": "<strong class=\"text-white\">Special edition — Mission Vietnam 2026.</strong><br />Each item directly funds a meal for a child.",
    "b.order": "📧 Order",
    "b.addcart": "🛒 Add to cart",
    "b.unisex.logo": "Unisex · Lotus logo",
    "b.size.unique": "One size · Lotus logo",
    "b.colors": "Colours",
    "b.footer.back": "← Back to main site",
    "b.footer.copy": "© 2026 Lotus d'Enfance · Solidarity shop",
    "b.footer.assoc": "Non-profit (loi 1901) · All shop profits<br />go to disadvantaged children in Vietnam.",
    "b.footer.fb": "Facebook page",
    "b.footer.donate": "❤ Donate",
    "b.cart.title": "🛒 My cart",
    "b.cart.empty": "Your cart is empty",
    "b.cart.total": "Estimated total",
    "b.cart.finalize": "Finalise the order →",
    "b.cart.send": "📧 Send the order by email",
    "b.cart.clear": "Empty the cart",
    "b.cart.nom": "Last name *",
    "b.cart.prenom": "First name *",
    "b.cart.adresse": "Address *",
    "b.cart.tel": "Phone *",
    "b.modal.size": "Size",
    "b.modal.color": "Colour",
    "b.modal.cancel": "Cancel",
    "b.modal.add": "🛒 Add",
    "b.toast.suffix": "added to cart",

    /* ════════ PAGES LÉGALES ════════ */
    "legal.back": "← Back to site",
    "ml.title": "Legal notice",
    "ml.updated": "Last updated: 2 June 2026",
    "ml.s1": "1. Site editor",
    "ml.editor": "<strong>Lotus d'Enfance</strong><br />Non-profit association governed by the French law of 1 July 1901.<br />RNA number: W451009355<br />Registered office: 6 place du 11 Novembre, 45630 Beaulieu-sur-Loire, France<br />Email: <a href=\"mailto:lotusdenfance@gmail.com\">lotusdenfance@gmail.com</a>",
    "ml.s2": "2. Publication director",
    "ml.s2.p": "The publication director is the legal representative of the association: Mrs KOYUNCU Thi Bich Nhung, as president of the Lotus d'Enfance association.",
    "ml.s3": "3. Hosting",
    "ml.s3.p": "This site is hosted by <strong>OVH SAS</strong><br />2 rue Kellermann, 59100 Roubaix, France<br />RCS Lille Métropole 424 761 419 00045<br />Phone: 1007 · Website: <a href=\"https://www.ovhcloud.com\" target=\"_blank\" rel=\"noopener\">ovhcloud.com</a>",
    "ml.s4": "4. Intellectual property",
    "ml.s4.p": "All content on this site (texts, photographs, logo, graphic elements) is, unless otherwise stated, the property of the Lotus d'Enfance association or used with the permission of their authors. Any reproduction, representation, modification or distribution, in whole or in part, without prior authorisation is prohibited and would constitute an infringement punishable under intellectual property law.",
    "ml.s5": "5. External links",
    "ml.s5.p": "The site may contain links to third-party sites (notably HelloAsso and Facebook). Lotus d'Enfance has no control over these sites and declines all responsibility for their content or the use that may be made of them.",
    "ml.s6": "6. Donations",
    "ml.s6.p": "Online donations are collected via the secure <a href=\"https://www.helloasso.com/associations/lotus-d-enfance/formulaires/2\" target=\"_blank\" rel=\"noopener\">HelloAsso</a> platform. The association does not keep any banking data; these are processed directly and exclusively by HelloAsso and its payment providers.",
    "ml.s7": "7. Personal data",
    "ml.s7.p": "The processing of your personal data is described in our <a href=\"confidentialite.html\">Privacy Policy</a>.",
    "ml.s8": "8. Contact",
    "ml.s8.p": "For any question regarding this legal notice, you can write to us at: <a href=\"mailto:lotusdenfance@gmail.com\">lotusdenfance@gmail.com</a>.",

    "cf.title": "Privacy Policy",
    "cf.updated": "Last updated: 2 June 2026",
    "cf.intro": "The <strong>Lotus d'Enfance</strong> association attaches great importance to protecting your privacy. This policy explains what personal data we collect, why, and what your rights are, in accordance with the General Data Protection Regulation (GDPR) and the French Data Protection Act.",
    "cf.s1": "1. Data controller",
    "cf.s1.p": "The data controller is the Lotus d'Enfance association, whose registered office is located at 6 place du 11 Novembre, 45630 Beaulieu-sur-Loire, France, represented by its president Mrs KOYUNCU Thi Bich Nhung.<br />Contact: <a href=\"mailto:lotusdenfance@gmail.com\">lotusdenfance@gmail.com</a>",
    "cf.s2": "2. Data collected and purposes",
    "cf.s2a": "a) Contact form",
    "cf.s2a.p": "When you use our contact form, we process:",
    "cf.s2a.l1": "<strong>Full name</strong> — to identify you and reply;",
    "cf.s2a.l2": "<strong>Email address</strong> — to reply to you;",
    "cf.s2a.l3": "<strong>Subject and message</strong> — to handle your request.",
    "cf.s2a.note": "The message is sent to the association's email address via the form delivery service <a href=\"https://web3forms.com/privacy\" target=\"_blank\" rel=\"noopener\">Web3Forms</a> (processor), which does not store the message content. <strong>Legal basis:</strong> your consent (voluntary sending of the message).",
    "cf.s2b": "b) Solidarity shop order",
    "cf.s2b.p": "When you place an order via the cart, we process:",
    "cf.s2b.l1": "<strong>First and last name</strong> — to prepare and identify your order;",
    "cf.s2b.l2": "<strong>Postal address</strong> — to deliver your items;",
    "cf.s2b.l3": "<strong>Phone number</strong> — to contact you about the order.",
    "cf.s2b.note": "The cart content is stored <strong>only in your browser</strong> (local storage) and is sent to the association only if you finalise the order by email. <strong>Legal basis:</strong> performance of pre-contractual measures and your consent.",
    "cf.s2c": "c) Donations",
    "cf.s2c.p": "Donations are processed by the <a href=\"https://www.helloasso.com/associations/lotus-d-enfance/formulaires/2\" target=\"_blank\" rel=\"noopener\">HelloAsso</a> platform. The association neither collects nor keeps any banking data. We invite you to read HelloAsso's privacy policy for these processes.",
    "cf.s3": "3. Cookies and local storage",
    "cf.s3.p": "This site <strong>uses no tracking cookies or audience measurement tools</strong>. Only <strong>local storage</strong> (\"localStorage\") is used to remember your cart content on your device. It is strictly necessary for the shop to work and does not require consent. You can clear it at any time by clearing your browser data.",
    "cf.s4": "4. Data recipients",
    "cf.s4.p": "Your data is intended exclusively for the Lotus d'Enfance association (its authorised members). It is <strong>never sold, rented or transferred</strong> to third parties for commercial purposes.",
    "cf.s5": "5. Retention period",
    "cf.s5.p": "Your data is kept only for the time needed to process your request or order, then deleted at the latest <strong>3 years after the last contact</strong>.",
    "cf.s6": "6. Your rights",
    "cf.s6.p": "In accordance with the GDPR, you have the following rights over your data:",
    "cf.s6.l1": "right of <strong>access</strong> and <strong>rectification</strong>;",
    "cf.s6.l2": "right to <strong>erasure</strong> (\"right to be forgotten\");",
    "cf.s6.l3": "right to <strong>restriction</strong> and <strong>objection</strong> to processing;",
    "cf.s6.l4": "right to <strong>portability</strong> of your data.",
    "cf.s6.note": "To exercise these rights, write to us at <a href=\"mailto:lotusdenfance@gmail.com\">lotusdenfance@gmail.com</a>. You also have the right to lodge a complaint with the French data authority <a href=\"https://www.cnil.fr\" target=\"_blank\" rel=\"noopener\">CNIL</a> (www.cnil.fr).",
    "cf.s7": "7. Changes",
    "cf.s7.p": "This policy may be updated at any time. The date of the last update appears at the top of this page.",

    /* — 404 — */
    "e404.title": "Oops, this page can't be found 🌸",
    "e404.p": "The page you are looking for doesn't exist or has been moved. Don't worry — you can go back to the home page to discover our work for the children of Vietnam.",
    "e404.home": "Back to home",
    "e404.shop": "View the shop"
  };

  /* ---------- Chaînes dynamiques (générées en JS) ---------- */
  var DYN = {
    fr: {
      "cart.empty": "Votre panier est vide",
      "toast.suffix": "ajouté au panier",
      "alert.required": "Veuillez renseigner les champs obligatoires (*) :",
      "alert.size": "Veuillez choisir une taille.",
      "alert.color": "Veuillez choisir un coloris.",
      "f.nom": "Nom", "f.prenom": "Prénom", "f.adresse": "Adresse", "f.tel": "Téléphone",
      "f.taille": "Taille", "f.coloris": "Coloris",
      "mail.hello": "Bonjour,\n\nJe souhaite passer la commande suivante :\n\n",
      "mail.total": "\nTotal estimé : ",
      "mail.coords": "Mes coordonnées :\nNom : ",
      "mail.prenom": "\nPrénom : ",
      "mail.adresse": "\nAdresse : ",
      "mail.tel": "\nTéléphone : ",
      "mail.thanks": "\n\nMerci beaucoup !",
      "mail.subject": "Commande Lotus d'Enfance — ",
      "mail.subject.items": " article(s)",
      /* contact (script.js) */
      "c.subj.don": "Faire un don",
      "c.subj.benevole": "Devenir bénévole",
      "c.subj.partenariat": "Partenariat",
      "c.subj.info": "Demande d'information",
      "c.subj.autre": "Autre",
      "c.subj.default": "Contact site",
      "c.body": "Bonjour,\n\nNom : {name}\nEmail : {email}\n\nMessage :\n{message}\n\nEnvoyé depuis le site Lotus d'Enfance.",
      "c.subject.prefix": "[Site] ",
      "c.sending": "Envoi en cours…"
    },
    en: {
      "cart.empty": "Your cart is empty",
      "toast.suffix": "added to cart",
      "alert.required": "Please fill in the required fields (*):",
      "alert.size": "Please choose a size.",
      "alert.color": "Please choose a colour.",
      "f.nom": "Last name", "f.prenom": "First name", "f.adresse": "Address", "f.tel": "Phone",
      "f.taille": "Size", "f.coloris": "Colour",
      "mail.hello": "Hello,\n\nI would like to place the following order:\n\n",
      "mail.total": "\nEstimated total: ",
      "mail.coords": "My details:\nLast name: ",
      "mail.prenom": "\nFirst name: ",
      "mail.adresse": "\nAddress: ",
      "mail.tel": "\nPhone: ",
      "mail.thanks": "\n\nThank you very much!",
      "mail.subject": "Lotus d'Enfance order — ",
      "mail.subject.items": " item(s)",
      "c.subj.don": "Make a donation",
      "c.subj.benevole": "Become a volunteer",
      "c.subj.partenariat": "Partnership",
      "c.subj.info": "Information request",
      "c.subj.autre": "Other",
      "c.subj.default": "Site contact",
      "c.body": "Hello,\n\nName: {name}\nEmail: {email}\n\nMessage:\n{message}\n\nSent from the Lotus d'Enfance website.",
      "c.subject.prefix": "[Site] ",
      "c.sending": "Sending…"
    }
  };

  /* ---------- Moteur ---------- */
  var STORE = 'lotus-lang';
  var ATTR_MAP = [
    ['data-i18n-alt', 'alt'],
    ['data-i18n-placeholder', 'placeholder'],
    ['data-i18n-aria-label', 'aria-label'],
    ['data-i18n-title', 'title'],
    ['data-i18n-content', 'content']
  ];
  var SELECTOR = '[data-i18n],[data-i18n-html],[data-i18n-alt],[data-i18n-placeholder],[data-i18n-aria-label],[data-i18n-title],[data-i18n-content]';

  function initLang() {
    try {
      var p = new URLSearchParams(location.search).get('lang');
      if (p === 'en' || p === 'fr') return p;
      var s = localStorage.getItem(STORE);
      if (s === 'en' || s === 'fr') return s;
    } catch (e) {}
    return 'fr';
  }

  var lang = initLang();

  function translateEl(el) {
    var k = el.getAttribute('data-i18n');
    if (k !== null) {
      if (el.__fr === undefined) el.__fr = el.textContent;
      el.textContent = (lang === 'en' && EN[k] != null) ? EN[k] : el.__fr;
    }
    var kh = el.getAttribute('data-i18n-html');
    if (kh !== null) {
      if (el.__frh === undefined) el.__frh = el.innerHTML;
      el.innerHTML = (lang === 'en' && EN[kh] != null) ? EN[kh] : el.__frh;
    }
    for (var i = 0; i < ATTR_MAP.length; i++) {
      var da = ATTR_MAP[i][0], ra = ATTR_MAP[i][1];
      var ak = el.getAttribute(da);
      if (ak !== null) {
        var prop = '__fra_' + ra;
        if (el[prop] === undefined) el[prop] = el.getAttribute(ra) || '';
        el.setAttribute(ra, (lang === 'en' && EN[ak] != null) ? EN[ak] : el[prop]);
      }
    }
  }

  function apply() {
    var nodes = document.querySelectorAll(SELECTOR);
    for (var i = 0; i < nodes.length; i++) translateEl(nodes[i]);
    document.documentElement.lang = lang;
    var titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) document.title = titleEl.textContent;
    var btns = document.querySelectorAll('[data-lang-btn]');
    for (var j = 0; j < btns.length; j++) {
      btns[j].classList.toggle('active', btns[j].getAttribute('data-lang-btn') === lang);
    }
  }

  /* API globale */
  window.t = function (key) {
    var d = DYN[lang] || DYN.fr;
    return (d[key] != null) ? d[key] : (DYN.fr[key] != null ? DYN.fr[key] : key);
  };
  window.getLang = function () { return lang; };
  window.setLang = function (l) {
    if (l !== 'en' && l !== 'fr') return;
    lang = l;
    try { localStorage.setItem(STORE, l); } catch (e) {}
    try {
      var url = new URL(location.href);
      if (l === 'fr') url.searchParams.delete('lang'); else url.searchParams.set('lang', 'en');
      history.replaceState(null, '', url.toString());
    } catch (e) {}
    apply();
    document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: l } }));
  };

  function boot() { apply(); }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
