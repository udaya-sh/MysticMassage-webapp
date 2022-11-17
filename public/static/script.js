var url =
  "https://wati-integration-service.clare.ai/ShopifyWidget/shopifyWidget.js?1149";
var s = document.createElement("script");
s.type = "text/javascript";
s.async = true;
s.src = url;
var options = {
  enabled: true,
  chatButtonSetting: {
    backgroundColor: "#e65728",
    ctaText: "",
    borderRadius: "25",
    marginLeft: "0",
    marginBottom: "50",
    marginRight: "50",
    position: "right",
  },
  brandSetting: {
    brandName: "Mystic Massage London",
    brandSubTitle: "Heal your body and mind",
    brandImg: "https://purgatory-massage.co.uk/logo-transparent.svg",
    welcomeText: "Hi there!\nHow can I help you?",
    messageText: "Hello, I would like to book an appointment!",
    backgroundColor: "#222222",
    ctaText: "Start Chat",
    borderRadius: "25",
    autoShow: false,
    phoneNumber: "447495094696",
  },
};
s.onload = function () {
  CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName("script")[0];
x.parentNode.insertBefore(s, x);
