export type LegalSection = {
  title: string;
  body?: string[];
  bullets?: string[];
};

export type LegalDocument = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  sections: LegalSection[];
};

export const legalDocuments: LegalDocument[] = [
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    eyebrow: 'Personal data and privacy',
    summary:
      'This Privacy Policy explains how SAS SCINTIA collects, uses, protects and manages personal data when users access Chef Qailo and its website.',
    sections: [
      {
        title: 'Introduction',
        body: [
          'This Privacy Policy describes how SAS SCINTIA ("we", "our", "us"), a simplified joint-stock company (societe par actions simplifiee) registered under number 930 581 749 R.C.S. Lyon, with a share capital of EUR 50,000.00, whose registered office is located at 3 Rue de Geneve, 69006 Lyon, France, operates and publishes the Chef Qailo application and the website https://www.chefqailo.com/.',
        ],
      },
      {
        title: 'Data Controller',
        body: ['The data controller is SAS SCINTIA, reachable at support@chefqailo.com.'],
      },
      {
        title: 'Categories of Data Collected',
        body: ['Depending on how you use the application, the following categories of data may be collected:'],
        bullets: [
          'Identification and account data: first name, last name, username, email address, user ID, encrypted password where applicable.',
          'Profile and preference data: language, culinary preferences, usage habits, saved recipes, user-entered content, shopping lists, inventories, meal plans, kitchen diary, history and settings.',
          'AI interaction data: text messages, queries, generated responses, summaries, technical logs and metadata required for the service to function.',
          'Subscription and in-app purchase data: subscription status, plan type, transaction receipt, subscription history, store-related technical identifiers.',
          'Technical data: device type, operating system, language, time zone, device identifiers, logs, events, crash data, diagnostics, performance metrics, truncated or technical IP addresses as applicable.',
          'Support and customer service data: exchanges with support, complaints, tickets, documents voluntarily provided.',
          'Security data: fraud detection, abuse prevention, security monitoring and evidence in the event of a dispute.',
        ],
      },
      {
        title: 'Purposes',
        body: ['The data collected is used for the following purposes:'],
        bullets: [
          'To provide, operate, maintain and improve the application and its features.',
          'To personalise the user experience, including culinary suggestions, the inventory, the planner and the Chef AI assistant.',
          'To manage authentication, account access, subscriptions, payments and premium benefits.',
          'To ensure service continuity, security, fraud prevention and incident resolution.',
          'To produce statistics, usage analytics, performance indicators and product improvements.',
          'To provide user support, track requests and handle complaints.',
          'To comply with our legal, regulatory, tax, accounting and evidentiary obligations.',
        ],
      },
      {
        title: 'Legal Bases',
        body: ['These processing activities are based, as applicable, on the following legal grounds:'],
        bullets: [
          'Performance of the contract entered into with the user.',
          'Compliance with legal obligations.',
          'The legitimate interests of the publisher, in particular for security, maintenance, evidence, service improvement and abuse prevention.',
          'Consent where required by applicable law.',
        ],
      },
      {
        title: 'Third-Party Services and Processors',
        body: [
          'To operate Chef Qailo, we may engage technical service providers, including for hosting, technical analytics, in-app purchases, subscription management and artificial intelligence services. Data may be processed by these providers strictly to the extent necessary to perform their services, in accordance with our instructions and under appropriate contractual commitments.',
          "We do not sell users' personal data to third parties.",
        ],
      },
      {
        title: 'Artificial Intelligence',
        body: [
          'Interactions with the Chef AI may be processed by third-party artificial intelligence services to generate responses, summaries, suggestions, cooking assistance or related content. The user understands and agrees that:',
        ],
        bullets: [
          'Their instructions, messages and content necessary for the service to function may be technically transmitted to these services.',
          'AI-generated content may be inaccurate, incomplete, unsuitable or inappropriate.',
          'The publisher does not warrant the accuracy, completeness or relevance of generated responses.',
          'The user remains solely responsible for their decisions, purchases, preparations, consumption, allergies, dietary requirements, food restrictions, kitchen safety and necessary verifications.',
        ],
      },
      {
        title: 'Retention',
        body: [
          'Data is retained for as long as strictly necessary for the purposes pursued, then archived or deleted in accordance with applicable legal, accounting, tax, evidentiary and security obligations. Technical logs and security evidence may be retained for longer in the event of an incident, suspected fraud or dispute.',
        ],
      },
      {
        title: 'Security',
        body: [
          'We implement reasonable and proportionate technical and organisational measures to protect data against unauthorised access, loss, alteration, disclosure or destruction. As no measure can guarantee absolute security, the user acknowledges that any digital service carries a residual risk.',
        ],
      },
      {
        title: 'User Rights',
        body: [
          'Subject to applicable law, the user may request access to, rectification, erasure, restriction, portability or objection to the processing of their data, and may withdraw their consent where consent forms the legal basis for processing. Any request may be sent to support@chefqailo.com.',
          'The user may also lodge a complaint with the competent supervisory authority, including the CNIL in France.',
        ],
      },
      {
        title: 'Minors',
        body: [
          'Chef Qailo is not intended for children within the meaning of applicable regulations, unless expressly stated otherwise. Minors must use the application under the responsibility of their legal guardians where required by law.',
        ],
      },
      {
        title: 'International Transfers',
        body: [
          'Some providers or processors may be located outside the European Union. Where necessary, appropriate safeguards are put in place in accordance with applicable regulations.',
        ],
      },
      {
        title: 'Cookies and Trackers',
        body: [
          "The website https://www.chefqailo.com/ and, where applicable, the application may use cookies or similar trackers, in particular for operational purposes, audience measurement, service improvement or security. Strictly necessary trackers are deposited without prior consent in accordance with applicable regulations. Non-essential trackers, including analytics or advertising trackers where applicable, are only deposited with the user's prior consent, collected via a banner or consent window allowing acceptance, refusal or configuration, and such consent may be withdrawn at any time.",
          'The updated list of cookies and trackers used, their purposes, retention periods and configuration options are accessible on the website https://www.chefqailo.com/ and, where applicable, in any preference centre or dedicated policy made available to users.',
        ],
      },
      {
        title: 'Changes',
        body: [
          'We may update this Privacy Policy at any time. The applicable version is the one published on the website or in the application at the time of consultation.',
        ],
      },
    ],
  },
  {
    slug: 'terms',
    title: 'Terms and Conditions of Use',
    eyebrow: 'Use of Chef Qailo',
    summary:
      'These Terms govern access to and use of the Chef Qailo application, including account responsibilities, AI features, acceptable use and liability rules.',
    sections: [
      {
        title: 'Introduction',
        body: [
          'These Terms and Conditions of Use govern access to and use of the Chef Qailo application published by SAS SCINTIA. Any use of the application constitutes full and unreserved acceptance of these Terms.',
        ],
      },
      {
        title: 'Scope of Service',
        body: [
          'Chef Qailo is a culinary and technology application offering in particular an AI assistant, text and voice interactions, inventory management, shopping lists, meal planning, a culinary journal, community content, history, notifications and premium services.',
        ],
      },
      {
        title: 'User Account',
        bullets: [
          'The user is responsible for the accuracy of the information provided during registration.',
          'The user is solely responsible for the confidentiality of their credentials and for all activity carried out through their account.',
          'Any suspected unauthorised use must be reported to the publisher without delay.',
        ],
      },
      {
        title: 'Acceptable Use',
        body: ['Without this list being exhaustive, the user undertakes not to:'],
        bullets: [
          'Use the application for unlawful, fraudulent, abusive or public-order-violating purposes.',
          'Infringe the rights of third parties, laws, regulations or the security of the service.',
          'Copy, reproduce, sell, resell, rent, licence, distribute or commercially exploit the application without authorisation.',
          'Attempt to gain unauthorised access to systems, APIs, databases or accounts.',
          'Use robots, scripts, automated methods or unauthorised scraping tools.',
          'Submit unlawful, misleading, hateful, violent, defamatory, obscene, infringing or intellectual-property-violating content.',
        ],
      },
      {
        title: 'AI Features and No Warranty of Results',
        body: [
          "Chef Qailo relies in part on artificial intelligence technologies. The Chef AI's responses, suggestions, recipes, summaries, recommendations, history, and generated content are provided as assistance only and not as a warranty of results. Accordingly, the AI service:",
        ],
        bullets: [
          'Does not constitute medical, nutritional, allergological, dietary, legal or professional advice.',
          "Does not replace the user's own judgement, skills or verifications.",
          'May produce errors, omissions, approximations or unsuitable content.',
          'Does not warrant the success of a recipe, food safety, or the absence of allergens or contraindications.',
        ],
      },
      {
        title: 'Allergies, Food Safety and Kitchen Use',
        body: [
          "The user remains solely responsible for verifying ingredients, quantities, cooking times, temperatures, expiry dates, allergens, food compatibility, equipment used and basic safety rules. To the extent permitted by law, and absent proven fault by the publisher, the publisher shall not be liable for damages, losses or harm arising from use of the application or execution of a recipe. Nothing in these Terms shall, however, be construed as excluding or limiting the publisher's liability for death or personal injury resulting from its fault, in accordance with the mandatory provisions of applicable law.",
        ],
      },
      {
        title: 'Availability and Changes to the Service',
        body: [
          'The publisher does not warrant that the application will be available without interruption, bugs, errors, slowdowns or maintenance. All or part of the service may be modified, suspended, restricted or discontinued, temporarily or permanently, with or without notice, for technical, security, legal, commercial or product-evolution reasons.',
        ],
      },
      {
        title: 'Intellectual Property',
        body: [
          'The application, its visual elements, design, architecture, name, logo, databases, texts, code, features, universe, proprietary content, offerings and documentation are protected by intellectual property law.',
          'No intellectual property right is transferred to the user beyond a personal, limited, revocable, non-exclusive and non-transferable right to use the application for its intended purpose.',
        ],
      },
      {
        title: 'User Content',
        body: [
          'Subject to the rights necessary for the service to function, the user retains ownership of their content. However, the user grants the publisher a non-exclusive, worldwide, royalty-free, sub-licensable to technical processors licence to host, process, reproduce, technically adapt, display and use such content solely to the extent necessary to operate, maintain, improve, secure and support the application.',
          'The user warrants that they hold the necessary rights over any content they submit.',
        ],
      },
      {
        title: 'Moderation, Suspension, Termination',
        body: [
          'The publisher reserves the right, without this constituting a general obligation to monitor, to remove content, suspend an account, restrict access to certain features, refuse a publication, block a user or terminate their access in the event of a breach of these Terms, abuse, fraud, security risk or legal request.',
        ],
      },
      {
        title: 'Limitation of Liability',
        body: [
          'To the extent permitted by law, the publisher, its officers, shareholders, employees, contractors and partners shall not be liable for indirect, consequential, commercial, financial or reputational damages, including loss of revenue, loss of opportunity, loss of data, loss of business, loss of customers, or consequences arising from use of the service.',
          "In any event, the publisher's total aggregate liability, for all causes and all damages combined, shall be limited to the amounts actually paid by the user in the twelve (12) months preceding the event giving rise to the claim, and in the absence of payment, to a minimum lump sum of one hundred (100) euros, except where mandatory statutory provisions provide otherwise. This limitation does not apply in the event of death, personal injury, gross negligence or wilful misconduct attributable to the publisher, nor in any other case where applicable law prohibits any limitation of liability.",
        ],
      },
      {
        title: 'Statutory Rights and Mandatory Protections',
        body: [
          'Nothing in these Terms is intended to exclude the mandatory rights available to consumers under applicable law. Limitation clauses apply to the fullest extent permitted by law.',
        ],
      },
      {
        title: 'Indemnification',
        body: [
          'To the extent permitted by applicable law and without prejudice to the mandatory rights of consumers, the user agrees to indemnify and hold the publisher harmless from and against any reasonably justified claims, actions, demands, judgements, costs, fees, losses or expenses arising from:',
        ],
        bullets: [
          "The user's wrongful or unlawful use of the application.",
          'Breach of these Terms.',
          "Infringement of a third party's rights.",
          'Content submitted, shared or exploited by the user through the service.',
        ],
      },
      {
        title: 'Force Majeure',
        body: ['The publisher shall not be liable in the event of force majeure or an event reasonably beyond its control.'],
      },
      {
        title: 'Governing Law and Jurisdiction',
        body: [
          'These Terms are governed by French law, subject to the mandatory provisions protecting consumers residing in another country. In the event of a dispute, the competent courts shall be those determined by applicable law.',
        ],
      },
      {
        title: 'Right of Withdrawal',
        body: [
          'In accordance with Articles L.221-18 et seq. of the French Consumer Code, consumers are in principle entitled to a fourteen (14)-day withdrawal period for distance contracts. However, with respect to digital content provided on an intangible medium, including subscription, credits and premium features, the user expressly acknowledges and agrees, at the time of purchase, that performance of the service begins immediately and that they thereby waive their right of withdrawal once delivery of the service has commenced, in accordance with Article L.221-28 of the French Consumer Code. For purchases made through the App Store or Google Play, refund requests remain subject to the policies of those platforms.',
        ],
      },
      {
        title: 'Consumer Mediation',
        body: [
          'In accordance with Articles L.616-1 et seq. of the French Consumer Code, any user who qualifies as a consumer and has an unresolved dispute with the publisher via support@chefqailo.com has the right to refer the matter free of charge to a consumer mediator. The contact details of the competent consumer mediator applicable to the relevant contractual relationship are provided to the user upon written request to support@chefqailo.com and may also be published on the website https://www.chefqailo.com/.',
        ],
      },
    ],
  },
  {
    slug: 'subscription-terms',
    title: 'Subscription and In-App Purchase Terms',
    eyebrow: 'Billing, plans and purchases',
    summary:
      'These terms explain Chef Qailo freemium and premium offers, app store billing, renewals, cancellation, credits, quotas and refunds.',
    sections: [
      {
        title: 'Introduction',
        body: [
          'These terms govern the freemium and premium offerings, auto-renewable subscriptions, annual plans, in-app purchases, credits, tokens, quotas, realtime minutes, benefits and paid services available in Chef Qailo.',
        ],
      },
      {
        title: 'Offers',
        body: ['Subject to product evolution, the application may offer in particular:'],
        bullets: [
          'A free and limited Freemium plan.',
          'A monthly Standard plan.',
          'A monthly Premium plan.',
          'Annual plans where available.',
          'Supplementary in-app purchases, credits, top-ups or additional products.',
          'Prices, durations, benefits, usage limits and included features are those displayed in the application and on the purchase platform at the time of subscription.',
        ],
      },
      {
        title: 'Payment Platforms',
        body: [
          'Subscriptions and in-app purchases made on iOS are managed by the Apple App Store. Those made on Android are managed by Google Play. Payments, renewals, cancellations, refunds and disclosure obligations are subject to the rules of those platforms, in addition to these terms.',
        ],
      },
      {
        title: 'Auto-Renewal',
        body: [
          'Unless cancelled before the renewal date, any auto-renewable subscription renews automatically for an identical or equivalent period. The applicable amount is charged through the relevant platform.',
          'The user is solely responsible for managing and cancelling their subscription in their Apple or Google account settings.',
        ],
      },
      {
        title: 'Pricing, Taxes and Changes',
        body: [
          'Prices may vary by country, currency, local tax, platform and applicable pricing policy. The publisher reserves the right to modify its prices, plans, packages, quotas or economic structures in the future, subject to the applicable store rules.',
        ],
      },
      {
        title: 'Tokens, Credits, Quotas and Minutes',
        body: ['The application may operate with usage quotas, realtime minutes, history limits, tokens, credits, daily caps, packages or fair use rules. Accordingly:'],
        bullets: [
          'Tokens, credits and quotas are tied to the user account.',
          'They do not constitute electronic money, a digital asset or a means of payment.',
          'They are non-transferable, non-assignable, non-resaleable and have no monetary value.',
          'They may expire, be reset, adjusted, replaced or deleted in accordance with the rules of the relevant plan.',
          'The publisher may implement fair use rules, anti-abuse measures, throttling or suspension in the event of abnormal consumption.',
        ],
      },
      {
        title: 'No Vested Right to a Given Feature Set',
        body: [
          'The user acknowledges that the publisher may evolve the features, the number of messages, minutes, history entries, credits, recipes, premium benefits or the product structure, provided this does not unlawfully deprive the user of the essential consideration of their subscription during the current billing period.',
        ],
      },
      {
        title: 'Free Trials and Promotions',
        body: [
          'Any promotional offer, free trial, discounted price, bonus or promotional code is subject to specific conditions displayed at the time of the offer. Unless stated otherwise, a free trial converts to a paid subscription at the end of its term if the user does not cancel in time.',
        ],
      },
      {
        title: 'Refunds',
        body: [
          'Refunds are processed primarily by Apple or Google in accordance with their respective policies and applicable law. The publisher does not guarantee that a refund will be granted and acts only to the extent permitted by the relevant platform.',
        ],
      },
      {
        title: 'Suspension / Fraud / Abuse',
        body: [
          'In the event of fraud, attempts to circumvent the economic model, manifest abuse, automated usage, unauthorised resale, misappropriation or behaviour harmful to the service, the publisher may restrict, suspend or remove access to paid benefits, without prejudice to any other available remedies.',
        ],
      },
      {
        title: 'Cancellation',
        body: [
          'Cancellation or expiry of a subscription terminates access to premium features, without prejudice to the possible retention of certain data, history or content depending on service settings, legal obligations or technical limitations.',
        ],
      },
      {
        title: 'App Store / Play Store Specific Notice',
        body: ['In accordance with the requirements of the distribution platforms, please note that:'],
        bullets: [
          'Payment will be charged to the Apple App Store or Google Play account upon confirmation of the purchase.',
          'The subscription auto-renews unless cancelled at least twenty-four (24) hours before the end of the current period, where this rule applies on the relevant platform.',
          'The renewal charge is billed within twenty-four (24) hours before the end of the current period in accordance with store rules.',
          'The user may manage and cancel their subscriptions through their store account settings.',
        ],
      },
    ],
  },
  {
    slug: 'delete-account',
    title: 'Delete Account',
    eyebrow: 'Account control',
    summary:
      'Chef Qailo users can delete their account directly from the app settings. Support is available if account access is unavailable.',
    sections: [
      {
        title: 'Delete Your Account in the App',
        body: [
          'Users can delete their account directly from the Chef Qailo app.',
          'Open the app and go to Profile -> Settings -> Delete Account.',
        ],
      },
      {
        title: 'If You Cannot Access Your Account',
        body: [
          'If you cannot access your account, or if the Delete Account option is not visible in the app settings, contact support@chefqailo.com for assistance.',
        ],
      },
      {
        title: 'Support Email',
        body: ['For account deletion help, email support@chefqailo.com.'],
      },
    ],
  },
];

export const companyInformation = [
  { label: 'Publisher', value: 'SAS SCINTIA' },
  { label: 'Company registration', value: '930 581 749 R.C.S. Lyon' },
  { label: 'Share capital', value: 'EUR 50,000.00' },
  { label: 'Registered office', value: '3 Rue de Geneve, 69006 Lyon, France' },
  { label: 'CEO', value: 'Azmi FEKIRI' },
  { label: 'Website', value: 'https://www.chefqailo.com/' },
  { label: 'Support / legal email', value: 'support@chefqailo.com' },
];

export const legalLastUpdated = '15/06/2026';
