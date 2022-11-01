var redirect = "https://moo-the-cow.github.io/tokengenerator/index.html";
var client_id = "5dsbemnclyj3cigfl2wsgxnnmcevuu";
var scopes = "bits:read+channel:read:redemptions+channel:read:subscriptions+clips:edit+moderation:read+channel:read:editors+channel:read:hype_train+channel_editor+channel:moderate+chat:edit+chat:read+whispers:read+whispers:edit";
var access_token = ""
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

if (document.location.hash) {
	var parsedHash = new URLSearchParams(window.location.hash.substr(1));
	if (parsedHash.get("access_token")) {
		access_token = parsedHash.get("access_token");
		$("#oauth").val(access_token);
	}
}
if (typeof getUrlParameter("code") !== "undefined") {
	code = getUrlParameter("code");
	$("#code").val(code);
}

$("#gettoken").on("click", function(event){
	window.location.href = `https://id.twitch.tv/oauth2/authorize?client_id=${client_id}&redirect_uri=${encodeURIComponent(redirect)}&response_type=token&scope=${scopes}`;
});
