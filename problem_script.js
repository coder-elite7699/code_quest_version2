/* ---------------------Basic Configuration of code editor------------------- */

var editor = ace.edit("editor");
editor.session.setMode("ace/mode/c_cpp");  
editor.resize();

/*-------------------------- Font Size Change---------------------------- */
document.getElementById('editor').style.fontSize='17px';
document.getElementById('font_size').addEventListener('change', function(){
    var seletced_font = this.value;
    document.getElementById('editor').style.fontSize=seletced_font;
})

/*-------------------------------Code editor theme------------------------- */
editor.setTheme("ace/theme/cobalt"); 
document.getElementById('theme_select').addEventListener('change', function() {
    var selectedTheme = this.value;
    editor.setTheme(selectedTheme);
});

