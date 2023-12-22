function skillsMember() {
    var skills = document.getElementById("skills");
    var skillsMember = document.getElementById("skillsMember");
    var skillsMemberValue = skillsMember.value;
    var skillsMemberText = skillsMember.options[skillsMember.selectedIndex].text;
    var skillsMemberTextValue = skillsMemberText + " " + skillsMemberValue;
    var skillsMemberTextValueLength = skillsMemberTextValue.length;
    var skillsMemberTextValueLengthMax = 100;
    var skillsMemberTextValueLengthResult = skillsMemberTextValueLengthMax - skillsMemberTextValueLength;
    if (skillsMemberTextValueLengthResult < 0) {
        skillsMemberTextValueLengthResult = 0;
    }
    skills.innerHTML = skillsMemberTextValueLengthResult + " characters left";
}