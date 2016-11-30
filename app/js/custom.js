/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
/* +    CONSOLE LOG                                                                         + */
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
function log_name(string){
    console.log('');
    console.log('----------------------------------------------------');
    console.log('- '+string);
    console.log('----------------------------------------------------');
}

function log_controller(string){
    console.log('');
    console.log('= = = = = = = = = = Controller = = = = = = = = = = =');
    console.log('= '+string);
    console.log('= = = = = = = = = = = = = = = = = = = = = = = = = = =');
}

function log_var(variavel) {
    console.log('');
    console.log('+ ----------------- Variável ---------------------- +');
    console.log(variavel);
    console.log('+ ------------------------------------------------- +');
}
