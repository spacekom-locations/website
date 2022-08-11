<template>
  <v-dialog
    :value="show"
    persistent
    max-width="800px"
    transition="dialog-transition"
    content-class="elevation-0"
    scrollable
  >
    <v-card class="ma-0 pa-0">
      <v-card-title class="pa-0 px-4 ma-0">
        <v-spacer></v-spacer>
        <v-btn
          color="red"
          @click="$emit('close', 'UI_EVENT')"
          large
          icon
          class="my-4"
          ><v-icon>mdi-close</v-icon></v-btn
        >
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="py-6 px-8 black--text">
        
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 24px;
            line-height: normal;
          "
        >
          <b>Terms of Service</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          PLEASE READ THESE TERMS OF SERVICE CAREFULLY AS THEY CONTAIN IMPORTANT
          INFORMATION REGARDING YOUR LEGAL RIGHTS, REMEDIES AND OBLIGATIONS.
          THESE INCLUDE VARIOUS LIMITATIONS AND EXCLUSIONS, A CLAUSE THAT
          GOVERNS THE JURISDICTION AND VENUE OF DISPUTES, AND OBLIGATIONS TO
          COMPLY WITH APPLICABLE LAWS AND REGULATIONS.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          IN PARTICULAR, LISTERS SHOULD UNDERSTAND HOW THE LAWS WORK IN THEIR
          RESPECTIVE CITIES. SOME CITIES HAVE LAWS THAT RESTRICT THEIR ABILITY
          TO LISTER PAYING RENTERS FOR SHORT-TERM RENTALS. IN MANY CITIES,
          LISTERS MUST REGISTER, GET A PERMIT, OR OBTAIN A LICENSE BEFORE
          LISTING A PROPERTY OR ACCEPTING RENTERS. CERTAIN TYPES OF SHORT-TERM
          BOOKINGS MAY BE PROHIBITED ALTOGETHER. LOCAL GOVERNMENTS VARY GREATLY
          IN HOW THEY ENFORCE THESE LAWS. PENALTIES MAY INCLUDE FINES OR OTHER
          ENFORCEMENT. LISTERS SHOULD REVIEW LOCAL LAWS BEFORE LISTING A SPACE
          ON GIGGSTER.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          Last Updated: March 21, 2022
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>1. Key Terms</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          Giggster provides an online platform that connects listers who have
          properties to rent with renters seeking to rent such properties for
          uses including but not limited to motion pictures, television and
          other types of creative productions (collectively, the
          <b>&quot;Services&quot;</b>), which Services are accessible at
          spacekom .com and any other websites through which Giggster makes the
          Services available (collectively, the <b>&quot;Site&quot;</b>).
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          If you are using the Site or Services, these Terms of Service are
          between you and Giggster, Inc. (hereinafter referred to as
          <b>“spacekom “</b>, <b>&quot;we&quot;</b>, <b>&quot;us&quot;</b>, or
          <b>&quot;our&quot;</b>) with respect to use of the Site or Services
          and with Stripe, a third-party payment processor, (<b>“Stripe”</b>)
          with respect to any payments or payouts from or to you conducted
          through the Site.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <b>&quot;Booking Request Period&quot;</b> means the time period
          starting from the time when a booking is requested by a Renter (as
          determined by Giggster in its sole discretion), within which a Lister
          may decide whether to confirm or reject that booking request, as
          stated on the Site or Services. Different Booking Request Periods may
          apply in different places.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <b>&quot;Collective Content&quot;</b> means Member Content and
          Giggster Content.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <b>&quot;Content&quot;</b> means text, graphics, images, music,
          software, audio, video, information or other materials.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <b>“Spacekom<span> </span>Content&quot;</b> means all Content that
          Giggster makes available through the Site and Services, or its related
          promotional campaigns and official social media channels, including
          any Content licensed from a third party, but excluding Member Content.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <b>&quot;Lister&quot;</b> means a Member who creates a Listing via the
          Site and Services.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <b>&quot;Listing&quot;</b> means a Property that is listed by a Lister
          to be available as a rental via the Site, and Services.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <b>&quot;Member</b>&quot; means a person who completes Giggster&#39;s
          account registration process, including but not limited to Listers and
          Renters, as described under &quot;Account Registration&quot; below.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <b>&quot;Member Content&quot;</b> means all Content that a Member
          posts, uploads, publishes, submits, transmits, or includes in their
          Listing, Member profile or Giggster promotional campaign to be made
          available through the Site or Services.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <b>&quot;Property&quot;</b> means residential, commercial and other
          properties.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <b>&quot;Renter&quot;</b> means a Member who requests from a Lister a
          booking of a Listing via the Site or Services.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <b>&quot;Tax&quot;</b> or <b>&quot;Taxes&quot;</b> mean any sales
          taxes, value added taxes (VAT), goods and services taxes, transient
          occupancy taxes, tourist or other visitor taxes, property or lodging
          taxes, fees (such as convention center fees) that Property providers
          may be required by law to collect and remit to governmental agencies,
          and other similar municipal, state, federal and national indirect or
          other withholding and personal or corporate income taxes.
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>2. Terms of Service</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          By using the Site or Services, you agree to comply with and be legally
          bound by the terms and conditions of these Terms of Service
          (&quot;Terms&quot;), whether or not you become a registered user of
          the Services. These Terms govern your access to and use of the Site
          and Services and all Collective Content (defined below), and
          constitute a binding legal agreement between you and Giggster. Please
          also read carefully our Privacy Policy at www.spacekom.help
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          In addition, certain areas of the Site (and your access to or use of
          certain aspects of the Services or Collective Content) may have
          different terms and conditions, standards, guidelines, or policies
          posted or may require you to agree with and accept additional terms
          and conditions. If there is a conflict between these Terms and terms
          and conditions posted for a specific area of the Site, Services, or
          Collective Content, the latter terms and conditions will take
          precedence with respect to your use of or access to that area of the
          Site, Services, or Collective Content.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          If you do not agree to these Terms, you have no right to obtain
          information from or otherwise continue using the Site or Services.
          Failure to use the Site or Services in accordance with these Terms may
          subject you to civil and criminal penalties.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          THE SITE AND SERVICES COMPRISE AN ONLINE PLATFORM THROUGH WHICH
          LISTERS MAY CREATE LISTINGS FOR PROPERTIES AND RENTERS MAY LEARN ABOUT
          AND BOOK PROPERTIES DIRECTLY WITH THE LISTERS. YOU UNDERSTAND AND
          AGREE THAT GIGGSTER IS NOT A PARTY TO ANY AGREEMENTS ENTERED INTO
          BETWEEN LISTERS AND RENTERS, NOR IS GIGGSTER A REAL ESTATE BROKER,
          AGENT OR INSURER. GIGGSTER HAS NO CONTROL OVER THE CONDUCT OF LISTERS,
          RENTERS AND OTHER USERS OF THE SITE AND SERVICES OR ANY PROPERTIES,
          AND DISCLAIMS ALL LIABILITY IN THIS REGARD TO THE MAXIMUM EXTENT
          PERMITTED BY LAW.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          IF YOU CHOOSE TO CREATE A LISTING ON GIGGSTER, YOU UNDERSTAND AND
          AGREE THAT YOUR RELATIONSHIP WITH GIGGSTER IS LIMITED TO BEING A
          MEMBER AND AN INDEPENDENT, THIRD-PARTY CONTRACTOR, AND NOT AN
          EMPLOYEE, AGENT, JOINT VENTURER OR PARTNER OF GIGGSTER FOR ANY REASON,
          AND YOU ACT EXCLUSIVELY ON YOUR OWN BEHALF AND FOR YOUR OWN BENEFIT,
          AND NOT ON BEHALF OF OR FOR THE BENEFIT OF GIGGSTER. GIGGSTER DOES NOT
          CONTROL, AND HAS NO RIGHT TO CONTROL, YOUR LISTING, YOUR OFFLINE
          ACTIVITIES ASSOCIATED WITH YOUR LISTING, OR ANY OTHER MATTERS RELATED
          TO ANY LISTING, THAT YOU PROVIDE. AS A MEMBER YOU AGREE NOT TO DO
          ANYTHING TO CREATE A FALSE IMPRESSION THAT YOU ARE ENDORSED BY,
          PARTNERING WITH, OR ACTING ON BEHALF OF OR FORTHE BENEFIT OF GIGGSTER,
          INCLUDING BY INAPPROPRIATELY USING ANY GIGGSTER INTELLECTUAL PROPERTY.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          YOU ACKNOWLEDGE AND AGREE THAT, BY ACCESSING OR USING THE SITE OR
          SERVICES OR BY DOWNLOADING OR POSTING ANY CONTENT FROM OR ON THE SITE
          OR THROUGH THE SERVICES, YOU ARE INDICATING THAT YOU HAVE READ, AND
          THAT YOU UNDERSTAND AND AGREE TO BE BOUND BY THESE TERMS AND RECEIVE
          OUR SERVICES, INCLUDING, WHERE APPLICABLE, PROGRAMS SUCH AS THE LISTER
          PROTECTION INSURANCE PROGRAM, WHETHER OR NOT YOU HAVE REGISTERED WITH
          THE SITE. IF YOU DO NOT AGREE TO THESE TERMS, THEN YOU HAVE NO RIGHT
          TO ACCESS OR USE THE SITE, SERVICES, OR COLLECTIVE CONTENT. If you
          accept or agree to these Terms on behalf of a company or other legal
          entity, you represent and warrant that you have the authority to bind
          that company or other legal entity to these Terms and, in such event,
          &quot;you&quot; and &quot;your&quot; will refer and apply to that
          company or other legal entity.
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>3. Modification</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          Spacekom.com reserves the right, at its sole discretion, to modify the
          Site or Services or to modify these Terms, including the Service Fees,
          at any time and without prior notice. If we modify these Terms, we
          will either post the modification on the Site or otherwise provide you
          with notice of the modification. We will also update the &quot;Last
          Updated&quot; date at the top of these Terms. By continuing to access
          or use the Site or Services after we have posted a modification on the
          Site or have provided you with notice of a modification, you are
          indicating that you agree to be bound by the modified Terms. If the
          modified Terms are not acceptable to you, your only recourse is to
          cease using the Site and Services.
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>4. Eligibility</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          The Site and Services are intended solely for persons who are 18 or
          older. Any access to or use of the Site or Services by anyone under 18
          is expressly prohibited. By accessing or using the Site or Services
          you represent and warrant that you are 18 or older.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          For users in the United States, Giggster may, to the extent permitted
          by applicable laws and if we have sufficient information to identify a
          user, obtain reports from public records of criminal convictions or
          sex offender registrations of the user. For users outside the United
          States, we may, to the extent permitted by applicable laws and if we
          have sufficient information to identify a user, obtain the local
          version of background or registered sex offender checks in our sole
          discretion. You agree and authorize us to use your personal
          information, such as your full name and date of birth, to obtain such
          reports, including from Giggster&#39;s vendors.
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>5. How the Site and Services Work</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          The Site and Services can be used to facilitate the listing and
          booking of Properties. Such Properties are included in Listings on the
          Site and Services by Listers. You may view Listings as an unregistered
          visitor to the Site and Services; however, if you wish to book a
          Property or create a Listing, you must first register to create a
          Giggster Account (defined below).
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          As stated above, Giggster makes available an online platform or
          marketplace with related technology for Renters and Listers to meet
          online and arrange for bookings of Properties directly with each
          other. Giggster is not an owner or operator of properties, nor is it a
          provider of properties, and Giggster does not own, sell, resell,
          furnish, provide, rent, re-rent, manage and/or control properties.
          Unless explicitly specified otherwise in the Giggster platform,
          Giggster&#39;s responsibilities are limited to facilitating the
          availability of the Site and Services.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          PLEASE NOTE THAT, AS STATED ABOVE, THE SITE AND SERVICES ARE INTENDED
          TO BE USED TO FACILITATE LISTERS AND RENTERS CONNECTING AND BOOKING
          PROPERTIES DIRECTLY WITH EACH OTHER. GIGGSTER CANNOT AND DOES NOT
          CONTROL THE CONTENT CONTAINED IN ANY LISTINGS AND THE CONDITION,
          LEGALITY OR SUITABILITY OF ANY PROPERTIES. GIGGSTER IS NOT RESPONSIBLE
          FOR AND DISCLAIMS ANY AND ALL LIABILITY RELATED TO ANY AND ALL
          LISTINGS AND PROPERTIES. ACCORDINGLY, ANY BOOKINGS WILL BE MADE OR
          ACCEPTED AT THE MEMBER&#39;S OWN RISK.
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>6. Account Registration</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          In order to access certain features of the Site and to book a Property
          or create a Listing, you must register to create an account (“spacekom
          Account&quot;) and become a Member. You may register to join the
          Services directly via the Site or as described in this section.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          You can also register to join by logging into your account with
          certain third-party social networking sites (&quot;SNS&quot;)
          (including, but not limited to, Facebook; each such account, a
          &quot;Third-Party Account&quot;), via our Site, as described below. As
          part of the functionality of the Site and Services, you may link your
          Giggster Account with Third-Party Accounts, by either: (i) providing
          your Third-Party Account login information to Giggster through the
          Site or Services; or (ii) allowing spacekom to access your Third-Party
          Account, as permitted under the applicable terms and conditions that
          govern your use of each Third-Party Account. You represent that you
          are entitled to disclose your Third-Party Account login information to
          Giggster and/or grant Giggster access to your Third-Party Account
          (including, but not limited to, for use for the purposes described
          herein), without breach by you of any of the terms and conditions that
          govern your use of the applicable Third-Party Account and without
          obligating Giggster to pay any fees or making Giggster subject to any
          usage limitations imposed by such third-party service providers. By
          granting Giggster access to any Third-Party Accounts, you understand
          that Giggster will access, make available and store (if applicable)
          any Content that you have provided to and stored in your Third-Party
          Account (&quot;SNS Content&quot;) so that it is available on and
          through the Site and Services via your Giggster Account and Giggster
          Account profile page. Unless otherwise specified in these Terms, all
          SNS Content, if any, will be considered to be Member Content for all
          purposes of these Terms. Depending on the Third-Party Accounts you
          choose and subject to the privacy settings that you have set in such
          Third-Party Accounts, personally identifiable information that you
          post to your Third-Party Accounts will be available on and through
          your Giggster Account on the Site and Services. Please note that if a
          Third-Party Account or associated service becomes unavailable or
          Giggster&#39;s access to such Third-Party Account is terminated by the
          third-party service provider, then SNS Content will no longer be
          available on and through the Site and Services. You have the ability
          to disable the connection between your Giggster Account and your
          Third-Party Accounts, at any time, by accessing the
          &quot;Settings&quot; section of the Site and Application. PLEASE NOTE
          THAT YOUR RELATIONSHIP WITH THE THIRD-PARTY SERVICE PROVIDERS
          ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR
          AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE PROVIDERS. Giggster makes
          no effort to review any SNS Content for any purpose, including but not
          limited to for accuracy, legality or non-infringement and Giggster is
          not responsible for any SNS Content.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          Your Giggster Account and your Giggster Account profile page will be
          created for your use of the Site based upon the personal information
          you provide to us or that we obtain via an SNS as described above. You
          may not have more than one (1) active Giggster Account. You agree to
          provide accurate, current and complete information during the
          registration process and to update such information to keep it
          accurate, current and complete. Giggster reserves the right to suspend
          or terminate your Giggster Account and your access to the Site and
          Services if you create more than one (1) Giggster Account, or if any
          information provided during the registration process or thereafter
          proves to be inaccurate, fraudulent, not current, incomplete, or
          otherwise in violation of these Terms of Service.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          You are responsible for safeguarding your password. You agree that you
          will not disclose your password to any third party and that you will
          take sole responsibility for any activities or actions under your
          Giggster Account, whether or not you have authorized such activities
          or actions. You will immediately notify Giggster of any unauthorized
          use of your Giggster Account.
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>7. Property Listings</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          As a Member, you may create Listings. To create a Listing, you will be
          asked a variety of questions about the Property to be listed,
          including, but not limited to, the property, capacity, size, features,
          and availability of the Property and pricing and related rules and
          financial terms. In order to be featured in Listings via the Site and
          Services, all Properties must have valid physical addresses. Listings
          will be made publicly available via the Site and Services. You
          understand and agree that the placement or ranking of Listings in
          search results may depend on a variety of factors, including, but not
          limited to, Renter and Lister preferences, ratings and/or ease of
          booking.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          Other Members will be able to book your Property via the Site and
          Services based upon the information provided in your Listing, your
          Renter requirements, and Renters&#39; search parameters and
          preferences. You understand and agree that once a Renter requests a
          booking of your Property, you may not request the Renter to pay a
          higher price than in the booking request.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          You acknowledge and agree that you alone are responsible for any and
          all Listings and Member Content you post. Accordingly, you represent
          and warrant that any Listing you post and the booking of, or a
          Renter&#39;s stay at, a Property in a Listing you post (i) will not
          breach any agreements you have entered into with any third parties,
          such as property owners association, condominium, lease or rental
          agreements, and (ii) will (a) be in compliance with all applicable
          laws (such as zoning laws and laws governing rentals of residential
          and other properties), Tax requirements, Intellectual Property laws,
          and rules and regulations that may apply to any Property included in a
          Listing you post (including having all required permits, licenses and
          registrations), and (b) not conflict with the rights of third parties.
          Please note that Giggster assumes no responsibility for a Lister&#39;s
          compliance with any agreements with or duties to third parties,
          applicable laws, rules and regulations. Giggster reserves the right,
          at any time and without prior notice, to remove or disable access to
          any Listing for any reason, including Listings that Giggster, in its
          sole discretion, considers to be objectionable for any reason, in
          violation of these Terms, or otherwise harmful to the Site or
          Services.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          If you are a Lister, you understand and agree that Giggster does not
          act as an insurer or as your contracting agent. If a Renter requests a
          booking of your Property and stays at your Property, any agreement you
          enter into with such Renter is between you and the Renter and Giggster
          is not a party to it.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          If you are a Lister, Giggster makes certain tools available to you to
          help you to make informed decisions about which Members you choose to
          confirm or preapprove for booking for your Property. You acknowledge
          and agree that, as a Lister, you are responsible for your own acts and
          omissions and are also responsible for the acts and omissions of any
          individuals who reside at or are otherwise present at the Property at
          your request or invitation, excluding the Renter (and the individuals
          the Renter invites to the Property, if applicable.)
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          Giggster may offer Listers the option of having photographers take
          photographs of their Properties. If you as a Lister choose to have
          photographer do this, Giggster shall own all copyrights in photographs
          taken but these photographs will be made available to you to include
          in your Listing with a watermark or tag bearing the words
          &quot;Giggster.com Verified Photo&quot; or similar wording
          (&quot;Verified Images&quot;). You agree that you alone are
          responsible for ensuring that your Listing is accurately represented
          in the Verified Images. You alone are responsible for using the
          Verified Images for your Listing and you warrant that you will cease
          to use the Verified Images or any other images if such images cease to
          accurately represent your Listing or if you cease to be a Lister for
          the Listing featured. All images, materials and content created by
          these photographers, including Verified Images, constitute Giggster
          Content, regardless of whether you include them in your Listing and
          you agree not to use them except in your Listing without prior
          authorization from Giggster. If your Giggster Account is terminated or
          suspended for any reason, you shall not use Verified Images in any
          way. You agree that Giggster retains its right to and may use the
          Verified Images for advertising, marketing, commercial and other
          business purposes in any media or platform, whether in relation to
          your Listing or otherwise, without further notice or compensation.
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>8. No Endorsement</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          Spacekom does not endorse any Member, Listing or Property. You
          understand that Verified Images are intended only to indicate a
          photographic representation of the Property at the time the photograph
          was taken. Verified Images are therefore not an endorsement by
          spacekom of any Member, Listing or Property.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          Members are required by these Terms to provide accurate information.
          Although spacekom may, for transparency or fraud prevention or
          detection purposes, directly or through third parties, ask you to
          provide a form of government identification, your date of birth, and
          other information, or undertake additional checks and processes
          designed to help verify or check the identities or backgrounds of
          Members and/or screen Member information against third party databases
          or other sources, we do not make any representations about, confirm,
          or endorse any Member or the Member&#39;s purported identity or
          background.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          By registering for a spacekom Account, you agree that Giggster may -
          but is not obligated to - request a consumer report on you from a
          Consumer Reporting Agency. If we do request a consumer report,
          we&#39;ll request and use it in compliance with applicable law,
          including the Fair Credit Reporting Act.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          Any references in the Site or Services to a Member being
          &quot;verified&quot; or &quot;connected&quot; (or similar language)
          only indicate that the Member has completed a relevant verification or
          identification process, and does not represent anything else. Any such
          description is not an endorsement, certification or guarantee by
          Giggster about any Member, including of the Member&#39;s identity and
          whether the Member is trustworthy, safe or suitable. Instead, any such
          description is intended to be useful information for you to evaluate
          when you make your own decisions about the identity and suitability of
          others whom you contact or interact with via the Site and Services. We
          therefore recommend that you always exercise due diligence and care
          when deciding whether to stay with a Lister or to accept or preapprove
          a booking request from a Renter, or to have any other interaction with
          any other Member. Except as provided in the Giggster Host Insurance
          Terms and Conditions (<b>“spacekom Host Insurance&quot;</b>), which is
          an agreement between spacekom and Listers, we are not responsible for
          any damage or harm resulting from your interactions with other
          Members.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          By using the Site or Services, you agree that any legal remedy or
          liability that you seek to obtain for actions or omissions of other
          Members or other third parties will be limited to a claim against the
          particular Members or other third parties who caused you harm. You
          agree not to attempt to impose liability on or seek any legal remedy
          from Giggster with respect to such actions or omissions. Accordingly,
          we encourage you to communicate directly with other Members on the
          Site and Services regarding any bookings or Listings made by you. This
          limitation shall not apply to any claim by a Lister against Giggster
          regarding the remittance of payments received from a Renter by
          Giggster on behalf of a Lister, which instead shall be subject to the
          limitations described in the section below entitled &quot;Limitation
          of Liability&quot;.
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>9. Bookings and Financial Terms</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <i>A. Key definitions</i>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <b>&quot;Lister Fees&quot;</b> means the fee that Giggster charges a
          Lister for the use of the Services, which is calculated as a
          percentage of the applicable Property Fees. The Lister Fees will be
          displayed to the Lister when the Lister is asked whether to confirm or
          reject a booking request from a prospective Renter.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <b>&quot;Payment Method&quot;</b> means a payment method that you have
          added to your Giggster Account, such as a credit card, debit card or
          PayPal.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <b>&quot;Property Fees&quot;</b> means the amounts that are due and
          payable by a Renter in exchange for renting a Property. This includes
          the Lister Fees, the Property Management Fees (if applicable) and, the
          Processing Fee. The Lister alone, and not Giggster, is responsible for
          setting the Property Fees for his or her Listing.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <b>&quot;Property Manager&quot;</b> means a person or a company
          providing assistance to the Lister with listing and renting out the
          Property.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <b>&quot;Property Management Fees&quot;</b> means the fee that
          Property Manager charges a Lister for assisting a Lister with listing
          and renting out the Property, which is calculated as a percentage of
          the applicable Property Fees. The Property Management fees will be
          displayed to the Renter when the Renter is asked whether to send a
          booking request to a Lister.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <b>&quot;Service Fees&quot;</b> means collectively the Property
          Management Fees and the Lister Fees.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <b>&quot;Total Fees&quot;</b> means collectively the Property Fees and
          the Service Fees plus any Taxes.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <i
            >B. Appointment of Stripe as Limited Payment Collection Agent for
            Lister</i
          >
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          Each Lister hereby appoints Stripe as the Lister’s limited payment
          collection agent for the purpose of accepting the Property Fees from
          Renters. Each Lister agrees that payment made by a Renter through
          Stripe, shall be considered the same as a payment made directly to the
          Lister, and the Lister will make the Property available to the Renter
          in the agreed-upon manner as if the Lister has received the Property
          Fees.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <i>C. Bookings and Financial Terms for Listers</i>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          If you are a Lister and a booking is requested for your Property via
          the Site or Services, you will be required to either preapprove,
          confirm or reject the booking request within the Booking Request
          Period, otherwise the booking request will automatically expire. When
          a booking is requested via the Site or Services, we will share with
          you (i) the first and last name of the Renter who has requested the
          booking, (ii) a link to the Renter&#39;s Giggster Account profile
          page. If you are unable to confirm or decide to reject a booking
          request within the Booking Request Period, any amounts collected by
          Stripe for the requested booking will be refunded to the applicable
          Renter. When you confirm a booking requested by a Renter, Giggster
          will send you an email, text message or message via the Site
          confirming such booking, depending on the selections you make via the
          Site and Services.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          Stripe will collect the Total Fees from Renters at the time of the
          booking request or upon the Lister&#39;s confirmation and will
          initiate payment of the Property Fees (less applicable fees and taxes)
          to the Lister and the Property Management Fees to the Property Manager
          in most cases within 24 hours of the scheduled check-in time of the
          Renter at the applicable Property (except to the extent that a refund
          is due to the Renter).
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <i>D. Bookings and Financial Terms for Renters</i>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          The Listers, not Giggster, are solely responsible for honoring any
          confirmed bookings and making available any Properties reserved
          through the Site and Services. If you, as a Renter, choose to enter
          into a transaction with a Lister for the booking of a Property, you
          agree and understand that you will be required to enter into an
          agreement with the Lister and you agree to accept any terms,
          conditions, rules and restrictions associated with such Property
          imposed by the Lister. You acknowledge and agree that you, and not
          Giggster, will be responsible for performing the obligations of any
          such agreements, that Giggster is not a party to such agreements, and
          that Giggster (inclusive of all subsidiaries) disclaims all liability
          arising from or related to any such agreements.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          The Total Fees payable will be displayed to a Renter before the Renter
          sends a booking request to a Lister. As noted above, the Lister is
          required to either preapprove, confirm or reject the booking request
          within the Booking Request Period; otherwise, the requested booking
          will be automatically canceled. Upon receipt of your booking request,
          Stripe may initiate a pre-authorization and/or charge a nominal amount
          to your Payment Method. If a requested booking is canceled (i.e. not
          confirmed by the applicable Lister), any amounts collected by Stripe
          will be refunded to such Renter, depending on the selections the
          Renter makes via the Site, and any pre-authorization of such
          Renter&#39;s Payment Method will be released, if applicable.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          You as a Renter agree to pay the Total Fees for any booking requested,
          and in most cases confirmed, in connection with your Giggster Account.
          Stripe will collect the Total Fees pursuant to these Terms.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          Once your confirmed booking transaction is complete you will receive a
          confirmation email summarizing your confirmed booking.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <i>E. Service Fees and Other Fees</i>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          In consideration for the use of Giggster&#39;s online marketplace and
          platform, Giggster charges Lister Fees. Stripe collects these Lister
          Fees, and, where applicable, may also collect Taxes in respect of the
          Lister Fees and Property Management Fees. Giggster deducts the Lister
          Fees and Property Management Fees from the Property Fees before
          remitting the balance to the Lister.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          More information on any such costs or deductions will be available via
          the Site. More information on Services Fees can be found at
          <a
            href="https://help.giggster.com/"
            target="_blank"
            data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://help.giggster.com/&amp;source=gmail&amp;ust=1660283563405000&amp;usg=AOvVaw2wGUWwKuFaVPw10L7yIh1D"
            ><span style="color: rgb(220, 161, 13)"
              >https://help.giggster.com</span
            ></a
          >. Except as otherwise provided herein, Service Fees are
          non-refundable.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <i>F. Cancellations and Refunds</i>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          i. Cancellations by Renters
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          As a Renter, you may cancel any reserved Booking before it is
          confirmed by the Lister without further obligation.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          Once a booking is confirmed by a Lister, the following cancellation
          and refund rules apply to Renters:
        </p>
        <ul>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            ><i>Cancellation within 24 hours of booking.</i> Any booking
            cancelled by a Renter twenty four (24) hours, or fewer, after
            booking confirmation adheres to SPACEKOM Grace Period cancellation
            policy which merits a full-refund to the Renter.
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            ><i
              >Cancellation 48 hours or fewer before the booking start date.</i
            >
            Any booking cancelled by a Renter forty eight (48) hours, or fewer,
            prior to the start of the booking period is non-refundable and the
            Renter will be charged the Total Fees stipulated in the booking
            request.
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            ><i
              >Cancellation more than 48 hours prior to the booking start
              date.</i
            >
            For any booking cancelled by a Renter more than forty eight (48)
            prior to the start of the booking period, the Renter will be charged
            fifty percent (50%) of the Total Fees stipulated in the booking
            request.
          </li>
        </ul>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          In the event a Renter cancels a booking that, pursuant to this Section
          9(f)(i), requires payment in the form of a refund to a Renter or
          payout to a Lister, Giggster will keep the Property Fees until the day
          on which the cancelled booking was to begin at which time spacekom
          will begin to process any applicable payments to the Renter and/or
          Lister in accordance with its normal payment policy. For all
          Renter-cancelled bookings, the Lister will be entitled to the Property
          Fees paid to spacekom as provided in this Section 9(f)(i) less the
          Service Fees payable to Giggster provided. Failure of a Renter to
          comply with the cancellation provisions of this Section 9(f) shall
          result in the Renter forfeiting his or her or its right to any refund
          and the Renter shall instead be liable for the full Total Fees.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          ii. Cancellations by Listers
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          The cancellation of a confirmed booking by a Lister requires intensive
          logistical support and can impact the high standard of service by
          which Giggster’s marketplace operates. As such, in the event of any
          cancellation of a confirmed booking by a Lister, Giggster reserves the
          right to impose penalties on the Lister’s account including publishing
          an automated review indicating a cancelled booking, and suspending or
          terminating the Lister’s account. A cancellation of a confirmed
          booking by a Lister must be made with at least 7 calendar days’
          notice. Failure to comply with the preceding sentence will result in
          Giggster charging the Lister the applicable Service Fee and Processing
          Fee. In addition, if any Lister cancels more than one confirmed
          booking, Giggster may, in its sole discretion, withhold future payouts
          to a Lister to make up for any losses incurred as a result of Lister’s
          initial cancellation. These losses may include but are not limited to,
          the additional costs required to complete a new Booking for a Renter
          that has been displaced by a Lister’s cancellation.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          iii. Cancellations by Giggster
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          In certain circumstances, Giggster may decide, in its sole discretion,
          that it is necessary or desirable to cancel a confirmed booking or to
          issue a refund to a Renter for part or all of the amounts charged to
          the Renter. This may be for extenuating circumstances, an emergency,
          or for any other reason. You hereby agree that Giggster and the
          relevant Renter or Lister will not have any liability for any such
          cancellation or refund made by Giggster.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <i>G. Fraud and Fraud Prevention</i>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          Giggster has fraud detection and prevention processes in place to
          protect and educate Listers against potential fraudulent behavior by
          Renters on the platform. Giggster’s team can be reached at any time by
          use of the contact page if the Lister desires a manual check on a
          Renter’s behavior and/or identity.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          Despite Giggster’s efforts to detect and prevent fraudulent behavior,
          the Lister ultimately has the responsibility to verify the identity of
          Renters that book the Lister’s property. If a Lister confirms a
          booking and is paid out Property Fees from a fraudulent Renter,
          Giggster reserves the right to collect the applicable Property Fees
          from the Lister once payout has been issued. If Lister refuses to
          return the applicable Property Fees to Giggster, Giggster may pursue
          legal avenues to retrieve them; Lister shall also reimburse Giggster
          for all costs incurred in collecting the applicable Property Fees,
          including, without limitation, court costs and attorneys’ fees. In
          addition, Giggster may, in its sole discretion, withhold future
          payouts to a Lister to make up for any losses incurred as a result of
          Lister’s initial cancellation.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          Additionally, Giggster maintains the right to withhold Lister’s payout
          related to potentially fraudulent Renter bookings for a period of 140
          days after payment is made on the platform in order to prevent the
          possibility of Renter-related chargebacks.
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>10. Taxes</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          Tax regulations may require us to collect appropriate tax information
          from our Listers, or to withhold taxes from payouts to Listers, or
          both. For instance, IRS regulations stipulate that we must collect an
          IRS Form W-9 from certain US Listers, and an appropriate IRS Form W-8
          (e.g. Form W-8BEN) from non-US listers with at least one Listing in
          the US. You as a Lister are solely responsible for keeping the
          information in your tax forms current, complete and accurate. If you
          as a Lister fail to provide us with documentation that we determine to
          be sufficient to alleviate our obligation (if any) to withhold taxes
          from payments to you (e.g. where you are a US Lister and you fail to
          provide us with a completed IRS Form W-9), we reserve the right in our
          sole discretion to freeze all payouts to you until resolution, to
          withhold such amounts as required by law, or to do both.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          You as a Lister understand and agree that you are solely responsible
          for determining (i) your applicable Tax reporting requirements, and
          (ii) the Taxes that should be included, and for including Taxes to be
          collected or obligations relating to applicable Taxes in Listings. You
          are also solely responsible for remitting to the relevant authority
          any Taxes included or received by you. Giggster cannot and does not
          offer Tax-related advice to any Members.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          You understand and acknowledge that appropriate governmental agencies,
          departments or authorities (the <b>&quot;Tax Authority&quot;</b>)
          where your Property is located may require Taxes to be collected from
          Renters or Listers on the amount paid for the right to use and/or
          occupancy of properties, and to be remitted to the respective Tax
          Authority. The laws in jurisdictions may vary.
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>11. Renting a Property on Giggster</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          As a Renter, you are responsible for acquiring all the necessary
          permits from all relevant bodies (including but not limited to filming
          permits, parking permits etc.) and insurance policies as well as
          release forms and other documents relevant to the filming process to
          be performed at the Property during the Booking Period. Giggster can
          not be held liable for Renter not acquiring all the necessary permits
          and other documents relevant to the filming process to be performed at
          the Property during the Booking Period.
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>12. Damage to Properties</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          As a Renter, you are responsible for leaving the Property in the
          condition it was in when you arrived. You acknowledge and agree that,
          as a Renter, you are responsible for your own acts and omissions and
          are also responsible for the acts and omissions of any individuals
          whom you invite to, or otherwise provide access to, the Property. In
          the event that a Lister claims otherwise and provides evidence of
          damage (<b>&quot;Damage Claim&quot;</b>), including but not limited to
          photographs, you agree to pay the cost of replacing the damaged items
          with equivalent items.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          Listers may choose to include security deposits in their Listings (<b
            >&quot;Security Deposits&quot;</b
          >). Each Listing will describe whether a Security Deposit is required
          for the applicable Property. Giggster will use commercially reasonable
          efforts to address Listers&#39; requests and claims related to
          Security Deposits, but Giggster is not responsible for administering
          or accepting any Damage Claims by Listers related to Security
          Deposits, and disclaims any and all liability in this regard.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          If a Lister makes a Damage Claim for a confirmed booking of a
          Property, you as a Renter will be notified of any Damage Claim and
          given forty eight (48) hours to respond. Thereafter, Stripe will
          collect any such costs from you and/or against the Security Deposit.
          Giggster/Stripe also reserves the right to otherwise collect payment
          from you and pursue any avenues available to Giggster in this regard
          in situations in which you have been determined, in Giggster&#39;s
          sole discretion, to have damaged any Property, including, but not
          limited to, in relation to any payment requests made by Listers under
          the Giggster Host Insurance, and in relation to any payments made by
          Giggster to Listers.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          Both Renters and Listers agree to cooperate with and assist Giggster
          in good faith, and to provide Giggster with such information and take
          such actions as may be reasonably requested by Giggster, in connection
          with any Damage Claims or other complaints or claims made by Members
          relating to Properties or any personal or other property located at a
          Property (including, without limitation, payment requests made under
          the Giggster Host Insurance) or with respect to any investigation
          undertaken by Giggster or a representative of Giggster regarding use
          or abuse of the Site or the Services. If you are a Renter, upon
          Giggster&#39;s reasonable request, and to the extent you are
          reasonably able to do so, you agree to participate in mediation or
          similar resolution process with a Lister, at no cost to you, which
          process will be conducted by Giggster or a third party selected by
          Giggster or its insurer, with respect to losses for which the Lister
          is requesting payment from Giggster under the Giggster Host Insurance.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          If you are a Renter, you understand and agree that Giggster may make a
          claim under your homeowner&#39;s, renter&#39;s or other insurance
          policy related to any damage or loss that you may have caused or been
          responsible for or to a Property or any personal or other property
          located at a Property (including without limitation amounts paid by
          Giggster under the Giggster Host Insurance). You agree to cooperate
          with and assist Giggster in good faith, and to provide Giggster with
          such information as may be reasonably requested by Giggster, in order
          to make a claim under your homeowner&#39;s, renter&#39;s or other
          insurance policy, including, but not limited to, executing documents
          and taking such further acts as Giggster may reasonably request to
          assist Giggster in accomplishing the foregoing Security Deposits, if
          required by a Lister, may be applied to any fees due from a Renter
          overstaying at a Listing without the Lister&#39;s consent.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          Renter acknowledges that Giggster holds a security deposit equal to
          50% of the total location fee 48 hours before the start date of the
          booking, should the location require it. This hold is authorized on
          the credit card used to book the location. If Giggster is unable to
          successfully authorize the security deposit, the Renter’s booking may
          be subject to the terms of the Giggster cancellation policy.
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>13. Insurance</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          A. Giggster requires that Lister and/or the Renter obtain insurance or
          review their existing policies and make sure their insurance covers
          any loss that may arise out of the use of that particular Property by
          the Renter, its guests, invitees, vendors, clients, customers or
          licensees, including policies covering property damage, casualty,
          personal injury, fire, and general liability (<b
            >“Sufficient Insurance”</b
          >). Giggster disclaims any and all liability for Lister or Renter’s
          failure to be covered by Sufficient Insurance. To the extent Lister
          has not obtained and does not have Sufficient Insurance, it shall
          require Renter to purchase such Sufficient Insurance prior to the
          booking start date. Giggster shall have no liability for the Parties’
          failure to contract a Sufficient Insurance.
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>14. Overstaying without the Lister&#39;s Consent</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          Renters agree that a confirmed booking is merely a license granted by
          the Lister to the Renter to enter and use the Listing for the limited
          duration of the confirmed booking and in accordance with the
          Renter&#39;s agreement with the Lister. Renters are allowed to be
          present in the Property only within the designated hours that the
          Lister specifies in the Listing or such other time as mutually agreed
          upon between the Lister and Renter and further agree to leave the
          Property no later than the checkout time that the Lister specifies in
          the Listing or such other time as mutually agreed upon between the
          Lister and Renter. If a Renter stays past the agreed upon designated
          hours or checkout time without the Lister&#39;s consent, they no
          longer have a license to stay in the Listing and the Lister is
          entitled to make the Renter leave. In addition, Renters agree that the
          Lister can charge the Renter for periods that the Renter stays over
          the agreed designated hours or period without the Lister&#39;s consent
          an additional fee of 1.5 times the average hourly Property Fee
          originally paid by the Renter to cover the inconvenience suffered by
          the Lister, plus all applicable Service Fees, Taxes, and any legal
          expenses incurred by the Lister to make the Renter leave
          (collectively, <b>&quot;Additional Sums&quot;</b>). The Additional
          Sums will be charged in half hour increments.
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>15. User Conduct</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          You understand and agree that you are solely responsible for
          compliance with any and all laws, rules, regulations, and Tax
          obligations that may apply to your use of the Site, Services and
          Collective Content. In connection with your use of the Site, Services
          and Collective Content, you may not and you agree that you will not:
        </p>
        <ul>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >A. violate any local, state, provincial, national, or other law or
            regulation, or any order of a court, including, without limitation,
            zoning restrictions and Tax regulations;
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >B. use manual or automated software, devices, scripts, robots,
            backdoors or other means or processes to access, &quot;scrape,&quot;
            &quot;crawl&quot; or &quot;spider&quot; any web pages or other
            services contained in the Site, Services or Collective Content;
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >C. access or use our Site or Services to use, expose, or allow to
            be used or exposed, any Giggster Content: (i) that is not publicly
            displayed by Giggster in its search results pages or listing pages
            before a booking is confirmed; (ii) in any way that is inconsistent
            with the Giggster Privacy Policy or Terms of Service; or (iii) in
            any way that otherwise violates the privacy rights or any other
            rights of Giggster&#39;s users or any other third party;
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >D. use the Site, Services or Collective Content for any commercial
            or other purposes that are not expressly permitted by these Terms or
            in a manner that falsely implies Giggster endorsement, partnership
            or otherwise misleads others as to your affiliation with Giggster;
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >E. dilute, tarnish or otherwise harm the Giggster brand in any way,
            including through unauthorized use of Collective Content,
            registering and/or using Giggster or derivative terms in domain
            names, trade names, trademarks or other source identifiers, or
            registering and/or using domains names, trade names, trademarks or
            other source identifiers that closely imitate or are confusingly
            similar to Giggster domains, trademarks, taglines, promotional
            campaigns or Collective Content;
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >F. copy, store or otherwise access or use any information contained
            on the Site, Services or Collective Content for purposes not
            expressly permitted by these Terms;
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >G. infringe the rights of Giggster or the rights of any other
            person or entity, including without limitation, their intellectual
            property, privacy, publicity or contractual right;
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >H. interfere with or damage our Site or Services, including,
            without limitation, through the use of viruses, cancel bots, Trojan
            horses, harmful code, flood pings, denial-of-service attacks,
            backdoors, packet or IP spoofing, forged routing or electronic mail
            address information or similar methods or technology;
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >I. use our Site or Services to transmit, distribute, post or submit
            any information concerning any other person or entity, including
            without limitation, photographs of others without their permission,
            personal contact information or credit, debit, calling card or
            account numbers;
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >J. use our Site, Services or Collective Content in connection with
            the distribution of unsolicited commercial email (&quot;spam&quot;)
            or advertisements unrelated to lodging in a private residence;
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >K. &quot;stalk&quot; or harass any other user of our Site, Services
            or Collective Content, or collect or store any personally
            identifiable information about any other user other than for
            purposes of transacting as an Giggster Renter or Lister;
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >L. offer, as a Lister, any Property that you do not yourself own or
            have permission to rent as a residential, commercial, public or
            other property (without limiting the foregoing, you will not list
            Properties as a Lister if you are serving in the capacity of a
            rental agent or listing agent for a third party);
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >M. offer, as a Lister, any Property that may not be rented or
            subleased pursuant to the terms and conditions of an agreement with
            a third party, including, but not limited to, a property rental
            agreement;
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >N. register for more than one Giggster Account or register for an
            Giggster Account on behalf of an individual other than yourself;
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >O. unless Giggster explicitly permits otherwise, request or book a
            stay at any Property if you will not actually be performing the
            filming or other creative process at the Property yourself;
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >P. contact another Member for any purpose other than asking a
            question related to a Booking, Property, Listing, or the
            Member&#39;s use of the Site and Services;
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >Q. recruit or otherwise solicit any Lister or other Member to join
            third-party services or websites that are competitive to Giggster,
            without Giggster&#39;s prior written approval;
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >R. recruit or otherwise solicit any Member to join third-party
            services or websites, without our prior written approval;
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >S. impersonate any person or entity, or falsify or otherwise
            misrepresent yourself or your affiliation with any person or entity;
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >T. use automated scripts to collect information from or otherwise
            interact with the Site, Services or Collective Content;
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >U. use the Site, Services or Collective Content to find a Lister or
            Renter and then complete a booking of a Property independent of the
            Site or Services, in order to circumvent the obligation to pay any
            Service Fees related to Giggster&#39;s provision of the Services or
            for any other reasons;
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >V. as a Lister, submit any Listing with false or misleading
            information, including price information, or submit any Listing with
            a price that you do not intend to honor;
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >W. violate these Terms;
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >X. engage in disruptive, circumventive, abusive or harassing
            behavior in any area or aspect of our Site, or Services;
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >Y. post, upload, publish, submit or transmit any Content that: (i)
            infringes, misappropriates or violates a third party&#39;s patent,
            copyright, trademark, trade secret, moral rights or other
            intellectual property rights, or rights of publicity or privacy;
            (ii) violates, or encourages any conduct that would violate, any
            applicable law or regulation or would give rise to civil liability;
            (iii) is fraudulent, false, misleading (directly or by omission or
            failure to update information) or deceptive; (iv) is defamatory,
            obscene, pornographic, vulgar or offensive; (v) promotes
            discrimination, bigotry, racism, hatred, harassment or harm against
            any individual or group; (vi) is violent or threatening or promotes
            violence or actions that are threatening to any other person; or
            (vii) promotes illegal or harmful activities or substances;
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >Z. systematically retrieve data or other content from our Site or
            Services to create or compile, directly or indirectly, in single or
            multiple downloads, a collection, compilation, database, directory
            or the like, whether by manual methods, through the use of bots,
            crawlers, or spiders, or otherwise;
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >AA. use, display, mirror or frame the Site, Services or Collective
            Content, or any individual element within the Site, Services or
            Collective Content, Giggster&#39;s name, any Giggster trademark,
            logo or other proprietary information, or the layout and design of
            any page or form contained on a page in the Site or Services,
            without Giggster&#39;s express written consent;
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >AB. access, tamper with, or use non-public areas of the Site or
            Services, Giggster&#39;s computer systems, or the technical delivery
            systems of Giggster&#39;s providers;
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >AC. attempt to probe, scan, or test the vulnerability of any
            Giggster system or network or breach any security or authentication
            measures;
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >AD. avoid, bypass, remove, deactivate, impair, descramble, or
            otherwise circumvent any technological measure implemented by
            Giggster or any of Giggster&#39;s providers or any other third party
            (including another user) to protect the Site, Services or Collective
            Content;
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >AE. forge any TCP/IP packet header or any part of the header
            information in any email or newsgroup posting, or in any way use the
            Site, Services or Collective Content to send altered, deceptive or
            false source-identifying information;
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >AG. advocate, encourage, or assist any third party in doing any of
            the foregoing; or
          </li>
          <li
            style="
              margin: 0px;
              font-variant-numeric: normal;
              font-variant-east-asian: normal;
              font-stretch: normal;
              font-size: 13px;
              line-height: normal;
            "
          >
            <span
              style="
                font-variant-numeric: normal;
                font-variant-east-asian: normal;
                font-stretch: normal;
                font-size: 9px;
                line-height: normal;
                font-family: Menlo;
              "
            ></span
            >AH. accept or make a payment for Property Fees or Property
            Management Fees outside Giggster. If you do so, you acknowledge and
            agree that you: (i) would be in breach of these Terms; (ii) accept
            all risks and responsibility for such payment, and (iii) hold
            Giggster harmless from any liability for such payment. Giggster may
            in certain instances, withhold future payouts to recover lost funds
            caused by a Host accepting payment outside of Giggster.
          </li>
        </ul>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          Giggster has the right to investigate and prosecute violations of any
          of the above to the fullest extent of the law. In addition, and as set
          in these Terms, Giggster may take a range of actions against you,
          including but not limited to deactivating or canceling your Listing(s)
          or Giggster Account, for a violation of this Section or these Terms.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          Giggster may access, preserve and disclose any of your information if
          we are required to do so by law, or if we believe in good faith that
          it is reasonably necessary to (i) respond to claims asserted against
          Giggster or to comply with legal process (for example, subpoenas or
          warrants), (ii) enforce or administer our agreements with users, such
          as these Terms and the Giggster Host Insurance, (iii) for fraud
          prevention, risk assessment, investigation, customer support, product
          development and de-bugging purposes, or (iv) protect the rights,
          property or safety of Giggster, its users, or members of the public.
          You acknowledge that Giggster has no obligation to monitor your access
          to or use of the Site, Services or Collective Content or to review or
          edit any Member Content, but has the right to do so for the purpose of
          operating and improving the Site and Services (including without
          limitation for fraud prevention, risk assessment, investigation and
          customer support purposes), to ensure your compliance with these
          Terms, to comply with applicable law or the order or requirement of a
          court, administrative agency or other governmental body, to respond to
          content that it determines is otherwise objectionable or as set forth
          in these Terms. Giggster reserves the right, at any time and without
          prior notice, to remove or disable access to any Collective Content
          that Giggster, at its sole discretion, considers to be objectionable
          for any reason, in violation of these Terms or otherwise harmful to
          the Site or Services.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <i>Reporting Misconduct</i>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          If you stay with or host anyone who you feel is acting or has acted
          inappropriately, including but not limited to anyone who (i) engages
          in offensive, violent or sexually inappropriate behavior, (ii) you
          suspect of stealing from you, or (iii) engages in any other disturbing
          conduct, you should immediately report such person to the appropriate
          authorities and then to Giggster by contacting us with your police
          station and report number; provided that your report will not obligate
          us to take any action beyond that required by law (if any) or cause us
          to incur any liability to you.
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>16. Privacy</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          You agree that Giggster&#39;s
          <a
            href="https://giggster.com/privacy"
            target="_blank"
            data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://giggster.com/privacy&amp;source=gmail&amp;ust=1660283563405000&amp;usg=AOvVaw1FfHp9i1jgavMbhVE7Rz32"
            ><span style="color: rgb(220, 161, 13)">Privacy Policy</span></a
          >
          (as may be updated from time to time) governs Giggster&#39;s
          collection and use of your personal information.
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>17. Intellectual Property Ownership and Rights Notices</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          The Site, Services, and Collective Content are protected by copyright,
          trademark, and other laws of the United States and foreign countries.
          You acknowledge and agree that the Site, Services and Collective
          Content, including all associated intellectual property rights, are
          the exclusive property of Giggster and its licensors. You will not
          remove, alter or obscure any copyright, trademark, service mark or
          other proprietary rights notices incorporated in or accompanying the
          Site, Services, or Collective Content. All trademarks, service marks,
          logos, trade names, and any other proprietary designations of Giggster
          used on or in connection with the Site, Services, and Giggster Content
          are trademarks or registered trademarks of Giggster in the US and
          abroad. Trademarks, service marks, logos, trade names and any other
          proprietary designations of third parties used on or in connection
          with the Site, Services, and Giggster Content are used for
          identification purposes only and may be the property of their
          respective owners. As a Lister, Renter, or Member, you understand and
          agree that you are bound by the additional Terms, Guidelines and
          Policies that apply to your use of the Site, Services and Collective
          Content.
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>18. SPACEKOM Content and Member Content License</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          Subject to your compliance with these Terms, Giggster grants you a
          limited, non-exclusive, non-transferable license, to (i) access and
          view any Giggster Content solely for your personal and non-commercial
          purposes and (ii) access and view any Member Content to which you are
          permitted access, solely for your personal and non-commercial
          purposes. You have no right to sublicense the license rights granted
          in this section.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          You will not use, copy, adapt, modify, prepare derivative works based
          upon, distribute, license, sell, transfer, publicly display, publicly
          perform, transmit, broadcast or otherwise exploit the Site, Services,
          or Collective Content, except as expressly permitted in these Terms.
          No licenses or rights are granted to you by implication or otherwise
          under any intellectual property rights owned or controlled by Giggster
          or its licensors, except for the licenses and rights expressly granted
          in these Terms.
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>19. Member Content</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          We may, in our sole discretion, permit you to post, upload, publish,
          submit or transmit Member Content. By making available any Member
          Content on or through the Site, Services, or through Giggster
          promotional campaigns, you hereby grant to Giggster a worldwide,
          irrevocable, perpetual (or for the term of the protection),
          non-exclusive, transferable, royalty-free license, with the right to
          sublicense, to use, view, copy, adapt, modify, distribute, license,
          sell, transfer, publicly display, publicly perform, transmit, stream,
          broadcast, access, view, and otherwise exploit such Member Content on,
          through, by means of or to promote or market the Site and Services.
          Giggster does not claim any ownership rights in any such Member
          Content and nothing in these Terms will be deemed to restrict any
          rights that you may have to use and exploit any such Member Content.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          You acknowledge and agree that you are solely responsible for all
          Member Content that you make available through the Site, Services or
          through Giggster promotional campaigns. Accordingly, you represent and
          warrant that: (i) you either are the sole and exclusive owner of all
          Member Content that you make available through the Site, Services or
          through Giggster promotional campaigns or you have all rights,
          licenses, consents and releases that are necessary to grant to
          Giggster the rights in such Member Content, as contemplated under
          these Terms; and (ii) neither the Member Content nor your posting,
          uploading, publication, submission or transmittal of the Member
          Content or Giggster&#39;s use of the Member Content (or any portion
          thereof) on, through or by means of the Site, the Services or Giggster
          promotional campaigns will infringe, misappropriate or violate a third
          party&#39;s patent, copyright, trademark, trade secret, moral rights
          or other proprietary or intellectual property rights, or rights of
          publicity or privacy, or result in the violation of any applicable law
          or regulation.
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>20. Links</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          The Site and Services may contain links to third-party websites or
          resources. You acknowledge and agree that Giggster is not responsible
          or liable for: (i) the availability or accuracy of such websites or
          resources; or (ii) the content, products, or services on or available
          from such websites or resources. Links to such websites or resources
          do not imply any endorsement by Giggster of such websites or resources
          or the content, products, or services available from such websites or
          resources. You acknowledge sole responsibility for and assume all risk
          arising from your use of any such websites or resources or the
          Content, products or services on or available from such websites or
          resources.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          Some portions of the Giggster platform implement Google Maps/Earth
          mapping services, including Google Maps API(s). Your use of Google
          Maps/Earth is subject to
          <a
            href="http://www.google.com/intl/en_us/help/terms_maps.html"
            target="_blank"
            data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=http://www.google.com/intl/en_us/help/terms_maps.html&amp;source=gmail&amp;ust=1660283563406000&amp;usg=AOvVaw04hHUQvJYwx5dKcucpWwex"
            ><span style="color: rgb(220, 161, 13)"
              >Google&#39;s terms of use.</span
            ></a
          >
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>21. Digital Millennium Copyright Act</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          The Digital Millennium Copyright Act of 1998 (“DMCA”) provides
          recourse for copyright owners who believe that material appearing on
          the Internet infringes their rights under U.S. copyright law. If you
          believe that any material residing on or linked to from the Site
          infringes your copyright, please send (or have your agent send) to
          Giggster’s Copyright Agent a notification of claimed infringement with
          all of the following information: (a) identification of the
          copyrighted work claimed to have been infringed, or, if multiple
          copyrighted works are covered by a single notification, a
          representative list of such works; (b) identification of the claimed
          infringing material and information reasonably sufficient to permit
          Giggster to locate the material on the Site (such as the URL(s) of the
          claimed infringing material); (c) information reasonably sufficient to
          permit Giggster to contact you, including an address, telephone number
          and, if available, an email address; (d) the following statement: “I
          have a good faith belief that use of the copyrighted materials
          described above as allegedly infringing is not authorized by the
          copyright owner, its agent, or the law”; (e) the following statement:
          “I swear, under penalty of perjury, that the information in the
          notification is accurate and that I am the copyright owner or am
          authorized to act on behalf of the owner of an exclusive right that is
          allegedly infringed”; and (f) your physical or electronic signature.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          To file a counter notification with Giggster, please provide the
          following information to Giggster’s Copyright Agent: (a) a description
          of the material that Giggster has removed or to which Giggster has
          disabled access; (b) information reasonably sufficient to permit
          Giggster to contact you, including an address, telephone number and,
          if available, an email address, and a statement that you consent to
          the jurisdiction of the Federal District Court for the judicial
          district in which your address is located (or the United States
          District Court for the Central District of California, if your address
          is outside of the United States), and that you will accept service of
          process from the person who provided notification of infringement or
          an agent of such person; (c) the following statement: “I swear, under
          penalty of perjury, that I have a good faith belief that the material
          identified above was removed or disabled as a result of a mistake or
          misidentification of the material to be removed or disabled”; and (d)
          your physical or electronic signature.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          Giggster’s Copyright Agent for notification of claimed infringement
          can be reached as follows: Copyright Agent, Giggster, Inc., Attn:
          Legal,
          <a
            href="https://www.google.com/maps/search/1935+Walgrove+Ave,+Los+Angeles,+CA+90066?entry=gmail&amp;source=g"
            >1935 Walgrove Ave, Los Angeles, CA 90066</a
          >. Giggster’s Copyright Agent for notification of claimed infringement
          can also be reached electronically at:
          <a href="mailto:contact@giggster.com" target="_blank"
            >contact@giggster.com</a
          >. Giggster reserves the right to terminate infringers’ and suspected
          infringers’ access to or use of the Site.
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>22. Term and Termination, Suspension and Other Measures</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <i>A. Term</i>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          This Agreement shall be effective for a 30-day term, at the end of
          which it will automatically and continuously renew for subsequent
          30-day terms until such time when you or Giggster terminate the
          Agreement as described below.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <i>B. Termination for convenience</i>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          You may terminate this Agreement at any time by sending us an email.
          If you cancel your Giggster Account as a Lister, any confirmed
          bookings will be automatically canceled and your Renters will receive
          a full refund. If you cancel your Giggster Account as a Renter, any
          confirmed booking will be automatically canceled and any refund will
          depend upon the terms of the applicable cancellation policy.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          Without limiting our rights specified below, Giggster may terminate
          this Agreement for convenience at any time by giving you 30 days&#39;
          notice via email to your registered email address.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <i>C. Termination for breach, suspension and other measures</i>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          Giggster may immediately, without notice terminate this Agreement if
          (i) you have materially breached these Terms or our Policies,
          including but not limited to any breach of your warranties outlined in
          these Terms or breach of the &quot;User Conduct&quot; provisions in
          these Terms, (ii) you have provided inaccurate, fraudulent, outdated
          or incomplete information during the Giggster Account registration, or
          Listing process or thereafter, (iii) you have violated applicable
          laws, regulations or third party rights, or (iv) Giggster believes in
          good faith that such action is reasonably necessary to protect the
          safety or property of other Members, Giggster or third parties, for
          fraud prevention, risk assessment, security or investigation purposes.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          In addition Giggster may deactivate or delay Listings, reviews, or
          other Member Content, cancel any pending or confirmed bookings, limit
          your use of or access to your Giggster Account and the Site or
          Services, temporarily or permanently revoke any special status
          associated with your Giggster Account, or temporarily or permanently
          suspend your Giggster Account if (i) you have breached these Terms or
          our Policies, including material and non-material breaches and
          receiving poor ratings from Listers or Renters, or (ii) Giggster
          believes in good faith that such action is reasonably necessary to
          protect the safety or property of Members, Giggster or third parties,
          for fraud prevention, risk assessment, security or investigation
          purposes.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          In case of non-material breaches and where appropriate, you will be
          given notice of any measure by Giggster and an opportunity to resolve
          the issue to Giggster&#39;s reasonable satisfaction.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <i>D. Consequences</i>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          If we take any of the measures described above we may (i) communicate
          to your Renters or Listers that a pending or confirmed booking has
          been canceled, (ii) refund your Renters in full for any and all
          confirmed bookings, irrespective of preexisting cancellation policies,
          (iii) support your Renters, on an exceptional basis, in finding
          potential alternative Properties, and (iv) you will not be entitled to
          any compensation for confirmed bookings that were canceled.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          If you or we terminate this Agreement, we do not have an obligation to
          delete or return to you any of your Member Content, including but not
          limited to any reviews or Feedback. When this Agreement has been
          terminated, you are not entitled to a restoration of your Giggster
          Account or any of your Member Content. If your access to or use of the
          Site and Services has been limited or your Giggster Account has been
          suspended or this Agreement has been terminated by us, you may not
          register a new Giggster Account or attempt to access and use the Site
          and Services through other Giggster Accounts.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <i>E. Survival</i>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          If you or we terminate this Agreement, the clauses of these Terms that
          reasonably should survive termination of the Agreement will remain in
          effect.
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>23. Disclaimers</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          IF YOU CHOOSE TO USE THE SITE, SERVICES OR COLLECTIVE CONTENT, YOU DO
          SO AT YOUR SOLE RISK. YOU ACKNOWLEDGE AND AGREE THAT GIGGSTER DOES NOT
          HAVE AN OBLIGATION TO CONDUCT BACKGROUND OR REGISTERED SEX OFFENDER
          CHECKS ON ANY MEMBER, INCLUDING, BUT NOT LIMITED TO, RENTERS AND
          LISTERS, BUT MAY CONDUCT SUCH BACKGROUND OR REGISTERED SEX OFFENDER
          CHECKS IN ITS SOLE DISCRETION. IF WE CHOOSE TO CONDUCT SUCH CHECKS, TO
          THE EXTENT PERMITTED BY APPLICABLE LAW, WE DISCLAIM WARRANTIES OF ANY
          KIND, EITHER EXPRESS OR IMPLIED, THAT SUCH CHECKS WILL IDENTIFY PRIOR
          MISCONDUCT BY A USER OR GUARANTEE THAT A USER WILL NOT ENGAGE IN
          MISCONDUCT IN THE FUTURE.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          THE SITE, SERVICES AND COLLECTIVE CONTENT ARE PROVIDED &quot;AS
          IS&quot;, WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED.
          WITHOUT LIMITING THE FOREGOING, SPACEKOM EXPLICITLY DISCLAIMS ANY
          WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET
          ENJOYMENT OR NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF
          COURSE OF DEALING OR USAGE OF TRADE. GIGGSTER MAKES NO WARRANTY THAT
          THE SITE, SERVICES, COLLECTIVE CONTENT, INCLUDING, BUT NOT LIMITED TO,
          THE LISTINGS OR ANY PROPERTIES WILL MEET YOUR REQUIREMENTS OR BE
          AVAILABLE ON AN UNINTERRUPTED, SECURE, OR ERROR-FREE BASIS. SPACEKOM
          MAKES NO WARRANTY REGARDING THE QUALITY OF ANY LISTINGS, PROPERTIES,
          LISTERS, RENTERS, YOUR ACCRUAL OF GIGGSTER TRAVEL CREDITS, THE
          SERVICES OR COLLECTIVE CONTENT OR THE ACCURACY, TIMELINESS,
          TRUTHFULNESS, COMPLETENESS OR RELIABILITY OF ANY COLLECTIVE CONTENT
          OBTAINED THROUGH THE SITE OR SERVICES.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED FROM
          GIGGSTER OR THROUGH THE SITE, SERVICES OR COLLECTIVE CONTENT, WILL
          CREATE ANY WARRANTY NOT EXPRESSLY MADE HEREIN.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          YOU ARE SOLELY RESPONSIBLE FOR ALL OF YOUR COMMUNICATIONS AND
          INTERACTIONS WITH OTHER USERS OF THE SITE OR SERVICES AND WITH OTHER
          PERSONS WITH WHOM YOU COMMUNICATE OR INTERACT AS A RESULT OF YOUR USE
          OF THE SITE OR SERVICES, INCLUDING, BUT NOT LIMITED TO, ANY LISTERS OR
          RENTERS. YOU UNDERSTAND THAT GIGGSTER DOES NOT MAKE ANY ATTEMPT TO
          VERIFY THE STATEMENTS OF USERS OF THE SITE OR SERVICES OR TO REVIEW OR
          VISIT ANY PROPERTIES. GIGGSTER MAKES NO REPRESENTATIONS OR WARRANTIES
          AS TO THE CONDUCT OF USERS OF THE SITE OR SERVICES OR THEIR
          COMPATIBILITY WITH ANY CURRENT OR FUTURE USERS OF THE SITE OR
          SERVICES. YOU AGREE TO TAKE REASONABLE PRECAUTIONS IN ALL
          COMMUNICATIONS AND INTERACTIONS WITH OTHER USERS OF THE SITE OR
          SERVICES AND WITH OTHER PERSONS WITH WHOM YOU COMMUNICATE OR INTERACT
          AS A RESULT OF YOUR USE OF THE SITE OR SERVICES, INCLUDING, BUT NOT
          LIMITED TO, RENTERS AND LISTERS, PARTICULARLY IF YOU DECIDE TO MEET
          OFFLINE OR IN PERSON REGARDLESS OF WHETHER SUCH MEETINGS ARE ORGANIZED
          BY GIGGSTER. GIGGSTER EXPLICITLY DISCLAIMS ALL LIABILITY FOR ANY ACT
          OR OMISSION OF ANY RENTER OR OTHER THIRD PARTY.
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>24. Limitation of Liability</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          YOU ACKNOWLEDGE AND AGREE THAT, TO THE MAXIMUM EXTENT PERMITTED BY
          LAW, THE ENTIRE RISK ARISING OUT OF YOUR ACCESS TO AND USE OF THE
          SITE, SERVICES AND COLLECTIVE CONTENT, YOUR LISTING OR BOOKING OF ANY
          PROPERTIES VIA THE SITE AND SERVICES, AND ANY CONTACT YOU HAVE WITH
          OTHER USERS OF GIGGSTER WHETHER IN PERSON OR ONLINE REMAINS WITH YOU.
          NEITHER GIGGSTER NOR ANY OTHER PARTY INVOLVED IN CREATING, PRODUCING,
          OR DELIVERING THE SITE, SERVICES AND COLLECTIVE CONTENT WILL BE LIABLE
          FOR ANY INCIDENTAL, SPECIAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES,
          INCLUDING LOST PROFITS, LOSS OF DATA OR LOSS OF GOODWILL, SERVICE
          INTERRUPTION, COMPUTER DAMAGE OR SYSTEM FAILURE OR THE COST OF
          SUBSTITUTE PRODUCTS OR SERVICES, OR FOR ANY DAMAGES FOR PERSONAL OR
          BODILY INJURY OR EMOTIONAL DISTRESS ARISING OUT OF OR IN CONNECTION
          WITH THESE TERMS, FROM THE USE OF OR INABILITY TO USE THE SITE,
          SERVICES OR COLLECTIVE CONTENT, FROM ANY COMMUNICATIONS, INTERACTIONS
          OR MEETINGS WITH OTHER USERS OF THE SITE, OR SERVICES OR OTHER PERSONS
          WITH WHOM YOU COMMUNICATE OR INTERACT AS A RESULT OF YOUR USE OF THE
          SITE, SERVICES, OR FROM YOUR LISTING OR BOOKING OF ANY PROPERTY VIA
          THE SITE AND SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT
          (INCLUDING NEGLIGENCE), PRODUCT LIABILITY OR ANY OTHER LEGAL THEORY,
          AND WHETHER OR NOT GIGGSTER HAS BEEN INFORMED OF THE POSSIBILITY OF
          SUCH DAMAGE, EVEN IF A LIMITED REMEDY SET FORTH HEREIN IS FOUND TO
          HAVE FAILED OF ITS ESSENTIAL PURPOSE.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          EXCEPT FOR OUR OBLIGATIONS TO PAY AMOUNTS TO APPLICABLE LISTERS
          PURSUANT TO THESE TERMS OR AN APPROVED PAYMENT REQUEST UNDER THE
          GIGGSTER HOST INSURANCE, IN NO EVENT WILL GIGGSTER&#39;S AGGREGATE
          LIABILITY ARISING OUT OF OR IN CONNECTION WITH THESE TERMS AND YOUR
          USE OF THE SITE AND SERVICES INCLUDING, BUT NOT LIMITED TO, FROM YOUR
          LISTING OR BOOKING OF ANY PROPERTY VIA THE SITE AND SERVICES, OR FROM
          THE USE OF OR INABILITY TO USE THE SITE, SERVICES, OR COLLECTIVE
          CONTENT AND IN CONNECTION WITH ANY PROPERTY OR INTERACTIONS WITH ANY
          OTHER MEMBERS, EXCEED THE AMOUNTS YOU HAVE PAID OR OWE FOR BOOKINGS
          VIA THE SITE AND SERVICES AS A RENTER IN THE TWELVE (12) MONTH PERIOD
          PRIOR TO THE EVENT GIVING RISE TO THE LIABILITY, OR IF YOU ARE A
          LISTER, THE AMOUNTS PAID BY GIGGSTER TO YOU IN THE TWELVE (12) MONTH
          PERIOD PRIOR TO THE EVENT GIVING RISE TO THE LIABILITY, OR ONE HUNDRED
          U.S. DOLLARS (US$100), IF NO SUCH PAYMENTS HAVE BEEN MADE, AS
          APPLICABLE. THE LIMITATIONS OF DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL
          ELEMENTS OF THE BASIS OF THE BARGAIN BETWEEN GIGGSTER AND YOU. SOME
          JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY
          FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, SO THE ABOVE LIMITATION MAY
          NOT APPLY TO YOU.
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>25. Indemnification</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          You agree to release, defend, indemnify, and hold Giggster and its
          affiliates and subsidiaries, and their officers, directors, employees
          and agents, harmless from and against any claims, liabilities,
          damages, losses, and expenses, including, without limitation,
          reasonable legal and accounting fees, arising out of or in any way
          connected with (a) your access to or use of the Site, Services, or
          Collective Content or your violation of these Terms; (b) your Member
          Content; (c) your (i) interaction with any Member, (ii) booking of a
          Property, or (iii) creation of a Listing; (d) the use, condition or
          rental of a Property by you, including but not limited to any
          injuries, losses, or damages (compensatory, direct, incidental,
          consequential or otherwise) of any kind arising in connection with or
          as a result of a rental, booking or use of a Property.
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>26. Entire Agreement</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          Except as they may be supplemented by additional Giggster policies,
          guidelines, standards, or terms for a specific product, feature,
          service or offering, these Terms constitute the entire and exclusive
          understanding and agreement between Giggster and you regarding the
          Site, Services, Collective Content (excluding Payment Services), and
          any bookings or Listings of Properties made via the Site and Services
          (excluding Payment Services), and these Terms supersede and replace
          any and all prior oral or written understandings or agreements between
          Giggster and you regarding bookings or listings of Properties, the
          Site, Services, and Collective Content (excluding Payment Services).
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>27. Assignment</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          You may not assign or transfer these Terms, by operation of law or
          otherwise, without Giggster&#39;s prior written consent. Any attempt
          by you to assign or transfer these Terms, without such consent, will
          be null and of no effect. Giggster may assign or transfer these Terms,
          at its sole discretion, without restriction. Subject to the foregoing,
          these Terms will bind and inure to the benefit of the parties, their
          successors and permitted assigns.
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>28. Notices</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          Any notices or other communications permitted or required hereunder,
          including those regarding modifications to these Terms, will be in
          writing and given by Giggster (i) via email (in each case to the
          address that you provide) or (ii) by posting to the Site. For notices
          made by e-mail, the date of receipt will be deemed the date on which
          such notice is transmitted.
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>29. Controlling Law and Jurisdiction</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          These Terms and your use of the Services will be interpreted in
          accordance with the laws of the State of California and the United
          States of America, without regard to its conflict-of-law provisions.
          You and we agree to submit to the personal jurisdiction of a state
          court located in Los Angeles County, Los Angeles, California or a
          United States District Court, Central District of California located
          in Los Angeles, California for any actions for which the parties
          retain the right to seek injunctive or other equitable relief in a
          court of competent jurisdiction to prevent the actual or threatened
          infringement, misappropriation or violation of a party&#39;s
          copyrights, trademarks, trade secrets, patents, or other intellectual
          property rights, as set forth in the Dispute Resolution provision
          below.
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>30. Dispute Resolution</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          If you reside in the United States, you and Giggster agree that any
          dispute, claim or controversy arising out of or relating to these
          Terms or the breach, termination, enforcement, interpretation or
          validity thereof, or to the use of the Services or use of the Site or
          Collective Content (collectively, &quot;Disputes&quot;) will be
          settled by binding arbitration, except that each party retains the
          right to seek injunctive or other equitable relief in a court of
          competent jurisdiction to prevent the actual or threatened
          infringement, misappropriation or violation of a party&#39;s
          copyrights, trademarks, trade secrets, patents, or other intellectual
          property rights. You acknowledge and agree that you and Giggster are
          each waiving the right to a trial by jury or to participate as a
          plaintiff or class member in any purported class action lawsuit,
          class-wide arbitration, private attorney-general action, or any other
          representative proceeding. Further, unless both you and Giggster
          otherwise agree in writing, the arbitrator may not consolidate more
          than one person&#39;s claims, and may not otherwise preside over any
          form of any class or representative proceeding. If this specific
          paragraph is held unenforceable, then the entirety of this
          &quot;Dispute Resolution&quot; section will be deemed void. Except as
          provided in the preceding sentence, this &quot;Dispute
          Resolution&quot; section will survive any termination of these Terms.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <i>Arbitration Rules and Governing Law.</i> This agreement to
          arbitrate evidences a transaction in interstate commerce, and thus the
          Federal Arbitration Act governs the interpretation and enforcement of
          this provision. The arbitration will be administered by the American
          Arbitration Association (&quot;AAA&quot;) in accordance with the
          Commercial Arbitration Rules and the Supplementary Procedures for
          Consumer Related Disputes (the &quot;AAA Rules&quot;) then in effect,
          except as modified by this &quot;Dispute Resolution&quot; section.
          (The AAA Rules are available at
          <a
            href="http://www.adr.org/arb_med"
            target="_blank"
            data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=http://www.adr.org/arb_med&amp;source=gmail&amp;ust=1660283563406000&amp;usg=AOvVaw3BuRPTeMfwzL2SUP2E1RlF"
            ><span style="color: rgb(220, 161, 13)"
              >www.adr.org/arb_med</span
            ></a
          >
          or by calling the AAA at 1--800--778--7879.) The Federal Arbitration
          Act will govern the interpretation and enforcement of this section.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <i>Arbitration Process.</i> A party who desires to initiate
          arbitration must provide the other party with a written Demand for
          Arbitration as specified in the AAA Rules. (The AAA provides a
          <a
            href="http://www.adr.org/cs/idcplg?IdcService=GET_FILE&amp;dDocName=ADRSTAGE2034889&amp;RevisionSelectionMethod=LatestReleased"
            target="_blank"
            data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=http://www.adr.org/cs/idcplg?IdcService%3DGET_FILE%26dDocName%3DADRSTAGE2034889%26RevisionSelectionMethod%3DLatestReleased&amp;source=gmail&amp;ust=1660283563406000&amp;usg=AOvVaw114lQTxTA5iyCvk27mixoe"
            ><span style="color: rgb(220, 161, 13)"
              >form Demand for Arbitration.</span
            ></a
          >) The arbitrator will be either a retired judge or an attorney
          licensed to practice law in the state of California and will be
          selected by the parties from the AAA&#39;s roster of consumer dispute
          arbitrators. If the parties are unable to agree upon an arbitrator
          within seven (7) days of delivery of the Demand for Arbitration, then
          the AAA will appoint the arbitrator in accordance with the AAA Rules.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <i>Arbitration Property and Procedure.</i> Unless you and Giggster
          otherwise agree, the arbitration will be conducted in the county where
          you reside. If your claim does not exceed 10,000 AED, then the
          arbitration will be conducted solely on the basis of documents you and
          Giggster submit to the arbitrator, unless you request a hearing or the
          arbitrator determines that a hearing is necessary. If your claim
          exceeds $10,000, your right to a hearing will be determined by the AAA
          Rules. Subject to the AAA Rules, the arbitrator will have the
          discretion to direct a reasonable exchange of information by the
          parties, consistent with the expedited nature of the arbitration.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <i>Arbitrator&#39;s Decision.</i> The arbitrator will render an award
          within the time frame specified in the AAA Rules. The arbitrator&#39;s
          decision will include the essential findings and conclusions upon
          which the arbitrator based the award. Judgment on the arbitration
          award may be entered in any court having jurisdiction thereof. The
          arbitrator&#39;s award damages must be consistent with the terms of
          the &quot;Limitation of Liability&quot; section above as to the types
          and the amounts of damages for which a party may be held liable. The
          arbitrator may award declaratory or injunctive relief only in favor of
          the claimant and only to the extent necessary to provide relief
          warranted by the claimant&#39;s individual claim. If you prevail in
          arbitration you will be entitled to an award of attorneys&#39; fees
          and expenses, to the extent provided under applicable law. Giggster
          will not seek, and hereby waives all rights it may have under
          applicable law to recover, attorneys&#39; fees and expenses if it
          prevails in arbitration.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <i>Fees.</i> Your responsibility to pay any AAA filing, administrative
          and arbitrator fees will be solely as set forth in the AAA Rules.
          However, if your claim for damages does not exceed $75,000, spacekom
          will pay all such fees unless the arbitrator finds that either the
          substance of your claim or the relief sought in your Demand for
          Arbitration was frivolous or was brought for an improper purpose (as
          measured by the standards set forth in Federal Rule of Civil Procedure
          11(b)).
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <i>Changes.</i> Notwithstanding the provisions of the
          &quot;Modification&quot; section above, if Giggster changes this
          &quot;Dispute Resolution&quot; section after the date you first
          accepted these Terms (or accepted any subsequent changes to these
          Terms), you may reject any such change by sending us written notice
          (including by email) within 30 days of the date such change became
          effective, as indicated in the &quot;Last Updated&quot; date above or
          in the date of Giggster&#39;s email to you notifying you of such
          change. By rejecting any change, you are agreeing that you will
          arbitrate any Dispute between you and Giggster in accordance with the
          provisions of this &quot;Dispute Resolution&quot; section as of the
          date you first accepted these Terms (or accepted any subsequent
          changes to these Terms).
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>31. Health and Safety Measures</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          You acknowledge and agree that spacekom Terms of Service include your
          responsibility for taking all necessary health, safety and hygiene
          measures to protect yourself and any Listers or Renters from the
          spread of potential infectious diseases or any other unhealthy,
          unsafe, or unsanitary conditions. You also acknowledge and agree that
          you have read and will comply with spacekom<a
            href="https://help.giggster.com/en/articles/4678399-giggster-s-covid-19-health-safety-measures"
            target="_blank"
            data-saferedirecturl="https://www.google.com/url?hl=en&amp;q=https://help.giggster.com/en/articles/4678399-giggster-s-covid-19-health-safety-measures&amp;source=gmail&amp;ust=1660283563406000&amp;usg=AOvVaw2VuJXT7jQgPRoY0hBfqopB"
            ><span style="color: rgb(220, 161, 13)">
              COVID-19 Health &amp; Safety Measures</span
            ></a
          >
          (the “Safety Measures”). Giggster reserves the right to update these
          Safety Measures periodically in its sole discretion, so please check
          the Safety Measures frequently, including the version that is current
          at the time of your Booking.
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>32. General</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          The failure of spacekom to enforce any right or provision of these
          Terms will not constitute a waiver of future enforcement of that right
          or provision. The waiver of any such right or provision will be
          effective only if in writing and signed by a duly authorized
          representative of Giggster. Except as expressly set forth in these
          Terms, the exercise by either party of any of its remedies under these
          Terms will be without prejudice to its other remedies under these
          Terms or otherwise. If for any reason an arbitrator or a court of
          competent jurisdiction finds any provision of these Terms invalid or
          unenforceable, that provision will be enforced to the maximum extent
          permissible and the other provisions of these Terms will remain in
          full force and effect.
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>33. Third party beneficiary</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          These Terms do not and are not intended to confer any rights or
          remedies upon any person other than the parties.
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>34. Contacting spacekom</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          If you have any questions about these Terms, please contact spacekom.
        </p>
        <p class="my-2"
          style="
            margin: 0px 0px 2px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 16px;
            line-height: normal;
          "
        >
          <b>35. Feedback</b>
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          We welcome and encourage you to provide feedback, comments and
          suggestions for improvements to the Site and Services
          (&quot;Feedback&quot;). You may submit Feedback by emailing us,
          through the &quot;Contact&quot; section of the Site, or by other means
          of communication. You acknowledge and agree that all Feedback you give
          us will be the sole and exclusive property of Giggster and you hereby
          irrevocably assign to Giggster and agree to irrevocably assign to
          Giggster all of your right, title, and interest in and to all
          Feedback, including without limitation all worldwide patent,
          copyright, trade secret, moral and other proprietary or intellectual
          property rights therein, and waive any moral rights you may have in
          such Feedback. At Giggster&#39;s request and expense, you will execute
          documents and take such further acts as Giggster may reasonably
          request to assist Giggster to acquire, perfect, and maintain its
          intellectual property rights and other legal protections for the
          Feedback.
        </p>
        <p class="my-2"
          style="
            margin: 0px;
            font-variant-numeric: normal;
            font-variant-east-asian: normal;
            font-stretch: normal;
            font-size: 13px;
            line-height: normal;
          "
        >
          <br />
        </p>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["show"],
};
</script>

<style>
</style>