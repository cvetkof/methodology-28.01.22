let initial_parameters = {
	vid_povrejdenia: document.querySelectorAll('[name="type_of_damage"]'),
	type_of_stupen_projiga: document.querySelectorAll('[name="type_of_stupen_projiga"]'),
	value_of_distance: document.querySelector('[name="value_of_distance"]'),
	number_of_segment: document.querySelectorAll('[name="number_of_segment"]'),
	vid_povrejdenia_value: 0,
	type_of_stupen_projiga_value: 0,
	number_of_segment_value: 0,
	value_of_distance_value: 0
}

let time_of_new_repair_result = document.querySelector('.time_of_new_repair_result');
let time_of_repair_result = document.querySelector('.time_of_repair_result');
let time_difference = document.querySelector('.time_difference_result');
let percent_result = document.querySelector('.percent_result');
let button = document.querySelector('.button');
let button_reset = document.querySelector('.button_reset');
let button_mini = document.querySelectorAll('.button_mini')[0];
let button_mini_1 = document.querySelectorAll('.button_mini')[1];
let button_mini_2 = document.querySelectorAll('.button_mini')[2];
let button_mini_3 = document.querySelectorAll('.button_mini')[3];
let button_mini_4 = document.querySelectorAll('.button_mini')[4];
let button_mini_5 = document.querySelectorAll('.button_mini')[5];
let button_mini_6 = document.querySelectorAll('.button_mini')[6];
let button_mini_7 = document.querySelectorAll('.button_mini')[7];
let button_mini_8 = document.querySelectorAll('.button_mini')[8];
let button_mini_9 = document.querySelectorAll('.button_mini')[9];
let button_mini_line_1 = document.querySelectorAll('.button_mini_line_1');
let button_mini_line_2 = document.querySelectorAll('.button_mini_line_2');
let button_mini_line_3 = document.querySelectorAll('.button_mini_line_3');
let menu = document.querySelector('.menu');
let menu_1 = document.querySelector('.menu_1');
let menu_2 = document.querySelector('.menu_2');
let menu_3 = document.querySelector('.menu_3');
let menu_4 = document.querySelector('.menu_4');
let menu_5 = document.querySelector('.menu_5');
let menu_6 = document.querySelector('.menu_6');
let menu_7 = document.querySelector('.menu_7');
let menu_8 = document.querySelector('.menu_8');
let menu_9 = document.querySelector('.menu_9');
let input_check = 0;
let input_check_1 = 0;
let input_check_2 = 0;
let input_check_3 = 0;
let input_check_4 = 0;
let input_check_5 = 0;
let d9_usual_time = 0;
let d9_new_time = 0;
let d10_usual_time = 0;
let new_time = 0;
let usual_time = 0;

function check_vid_povrejdenia() {
	let counter_vid_povrejdenia = 0;
	for (let i = 0; i < 7; i++) {
		if (initial_parameters.vid_povrejdenia[i].checked) counter_vid_povrejdenia++;
	}
    if (counter_vid_povrejdenia == 0) inable_vid_povrejdenia_alert(); else return true;
}

function definition_vid_povrejdenia() {
    let counter = 0;
    while (!initial_parameters.vid_povrejdenia[counter].checked) {
        counter++;
    }
    initial_parameters.vid_povrejdenia_value = initial_parameters.vid_povrejdenia[counter].value;
    console.log(initial_parameters.vid_povrejdenia_value);
    initial_parameters.vid_povrejdenia_value = Number(initial_parameters.vid_povrejdenia_value);
}

function check_distance() {
    if ((initial_parameters.value_of_distance.value < 5) || (initial_parameters.value_of_distance.value > 200)) {
        document.querySelector('.distance_line').style.visibility = 'visible';
        document.querySelector('.distance_line').style.opacity = '1';
        document.querySelectorAll('.alert')[1].style.visibility = 'visible';
        document.querySelectorAll('.alert')[1].style.opacity = '1';

        document.querySelector('.distance').classList.add('red');
    } else return true;
}

function definition_distance() {
    initial_parameters.value_of_distance_value = initial_parameters.value_of_distance.value;
    console.log(initial_parameters.value_of_distance_value);
    initial_parameters.value_of_distance_value = Number(initial_parameters.value_of_distance_value);
}

function check_number_of_segment() {
    let counter_number_of_segment = 0;
    for (let i = 0; i < 2; i++) {
        if (initial_parameters.number_of_segment[i].checked) counter_number_of_segment++;
    }
    if (counter_number_of_segment == 0) {
        document.querySelectorAll('.segment_line')[0].style.visibility = 'visible';
        document.querySelectorAll('.segment_line')[0].style.opacity = '1';
        document.querySelectorAll('.alert')[2].style.visibility = 'visible';
        document.querySelectorAll('.alert')[2].style.opacity = '1';

        document.querySelector('.segment').classList.add('red');
        //alert('УКАЖИТЕ ТИП УЧАСТКА');
    } else return true;
}

function definition_number_of_segment() {
    counter = 0;
    while (!initial_parameters.number_of_segment[counter].checked) {
        counter++;
    }
    initial_parameters.number_of_segment_value = initial_parameters.number_of_segment[counter].value;
    console.log(initial_parameters.number_of_segment_value);
    initial_parameters.number_of_segment_value = Number(initial_parameters.number_of_segment_value);
}

function check_type_of_stupen_projiga() {
	if ((initial_parameters.vid_povrejdenia_value == 3) || (initial_parameters.vid_povrejdenia_value == 5) || (initial_parameters.vid_povrejdenia_value == 6) || (initial_parameters.vid_povrejdenia_value == 7))
	{
		let counter_type_of_stupen_projiga = 0;
		for (let i = 0; i < 3; i++) {
			if (initial_parameters.type_of_stupen_projiga[i].checked) counter_type_of_stupen_projiga++;
		}
		if (counter_type_of_stupen_projiga == 0) {
		    document.querySelectorAll('.stupen_projiga_line')[0].style.visibility = 'visible';
		    document.querySelectorAll('.stupen_projiga_line')[0].style.opacity = '1';
		    document.querySelectorAll('.alert')[3].style.visibility = 'visible';
		    document.querySelectorAll('.alert')[3].style.opacity = '1';

		    document.querySelector('.stupen_projiga').classList.add('red');
		 } else return true;
	} else {
		initial_parameters.type_of_stupen_projiga_value = 100;
		return true;
	}
}

function definition_type_of_stupen_projiga() {
    if (initial_parameters.type_of_stupen_projiga_value == 100) console.log('остановка функции');
    else {
        counter = 0;
        while (!initial_parameters.type_of_stupen_projiga[counter].checked) {
            counter++;
        }
        initial_parameters.type_of_stupen_projiga_value = initial_parameters.type_of_stupen_projiga[counter].value;
        console.log(initial_parameters.type_of_stupen_projiga_value);
        initial_parameters.type_of_stupen_projiga_value = Number(initial_parameters.type_of_stupen_projiga_value);
    }
}

function definition_initial_parameters() {
	
        let counter = 0;
        while (!initial_parameters.vid_povrejdenia[counter].checked) {
            counter++;
        }
        initial_parameters.vid_povrejdenia_value = initial_parameters.vid_povrejdenia[counter].value;
        console.log(initial_parameters.vid_povrejdenia_value);
        initial_parameters.vid_povrejdenia_value = Number(initial_parameters.vid_povrejdenia_value);
	

        counter = 0;
        while (!initial_parameters.type_of_stupen_projiga[counter].checked) {
            counter++;
        }
        initial_parameters.type_of_stupen_projiga_value = initial_parameters.type_of_stupen_projiga[counter].value;
        console.log(initial_parameters.type_of_stupen_projiga_value);
        initial_parameters.type_of_stupen_projiga_value = Number(initial_parameters.type_of_stupen_projiga_value);


        console.log(initial_parameters.value_of_distance.value);
        initial_parameters.value_of_distance_value = Number(initial_parameters.value_of_distance.value);


        counter = 0;
        while (!initial_parameters.number_of_segment[counter].checked) {
            counter++;
        }
        initial_parameters.number_of_segment_value = initial_parameters.number_of_segment[counter].value;
        console.log(initial_parameters.number_of_segment_value);
        initial_parameters.number_of_segment_value = Number(initial_parameters.number_of_segment_value);
    }

function time_calculation() {
        let d7 = initial_parameters.value_of_distance_value * 90 + 3600;
	
        let d9 = 0;
        if ((initial_parameters.vid_povrejdenia_value == 1) || (initial_parameters.vid_povrejdenia_value == 2) ||
            ((initial_parameters.vid_povrejdenia_value == 7) && (initial_parameters.type_of_stupen_projiga_value == 0))) {
            d9 = 1800;
        } else {

            if ((initial_parameters.vid_povrejdenia_value == 3) && (initial_parameters.type_of_stupen_projiga_value == 1)) {
                d9 = 6300;
            } else {

                if ((initial_parameters.vid_povrejdenia_value == 3) && (initial_parameters.type_of_stupen_projiga_value == 2)) {
                    d9 = 12000;
                } else {

                    if ((initial_parameters.vid_povrejdenia_value == 3) && (initial_parameters.type_of_stupen_projiga_value == 3)) {
                        d9 = 12060;
                    } else {

                        if (initial_parameters.vid_povrejdenia_value == 4) {
                            d9 = 6300;
                        } else {

                            if ((initial_parameters.vid_povrejdenia_value == 5) && (initial_parameters.type_of_stupen_projiga_value == 1)) {
                                d9 = 6300;
                            } else {

                                if ((initial_parameters.vid_povrejdenia_value == 5) && (initial_parameters.type_of_stupen_projiga_value == 2)) {
                                    d9 = 13800;
                                } else {

                                    if ((initial_parameters.vid_povrejdenia_value == 5) && (initial_parameters.type_of_stupen_projiga_value == 3)) {
                                        d9 = 13860;
                                    } else {

                                        if ((initial_parameters.vid_povrejdenia_value == 6) && (initial_parameters.type_of_stupen_projiga_value == 1)) {
                                            d9 = 6300;
                                        } else {

                                            if ((initial_parameters.vid_povrejdenia_value == 6) && (initial_parameters.type_of_stupen_projiga_value == 2)) {
                                                d9 = 13800;
                                            } else {

                                                if ((initial_parameters.vid_povrejdenia_value == 6) && (initial_parameters.type_of_stupen_projiga_value == 3)) {
                                                    d9 = 13860;
                                                } else {

                                                    if ((initial_parameters.vid_povrejdenia_value == 7) && (initial_parameters.type_of_stupen_projiga_value == 1)) {
                                                        d9 = 6300;
                                                    } else {

                                                        if ((initial_parameters.vid_povrejdenia_value == 7) && (initial_parameters.type_of_stupen_projiga_value == 2)) {
                                                            d9 = 13800;
                                                        } else {

                                                            if ((initial_parameters.vid_povrejdenia_value == 7) && (initial_parameters.type_of_stupen_projiga_value == 3)) {
                                                                d9 = 13860;
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        d9_usual_time = d9;
        let d10 = 0;
        if (initial_parameters.number_of_segment_value == 1) d10 = 9900; else d10 = 0;
        d10_usual_time = d10;

        let d22 = 76863 + d7 + d9 + d10;
        usual_time = d22;
        console.log(d22);

        let h = Math.trunc (d22 / 3600);
        let m = Math.trunc (d22 % 3600 / 60);
        let s = Math.trunc (d22 % 3600 % 60);
        console.log(h);
        console.log(m);
        console.log(s);
        if (m < 10) { m = String(`0${m}`)};
        if (s < 10) { s = String(`0${s}`) };

        time_of_repair_result.innerHTML = `${h}:${m}:${s}`;
        time_of_repair_result.style.color = '#ff5a5a';
    }

function time_calculation_new() {
        let d7 = initial_parameters.value_of_distance_value * 90 + 3600;

        let d9 = 0;
        if ((initial_parameters.vid_povrejdenia_value == 1) || (initial_parameters.vid_povrejdenia_value == 2) || 
        ((initial_parameters.vid_povrejdenia_value == 7) && (initial_parameters.type_of_stupen_projiga_value == 0))) {
            d9 = d9_usual_time - 1800;
        } else {

            if ((initial_parameters.vid_povrejdenia_value == 3) || (initial_parameters.vid_povrejdenia_value == 4) || (initial_parameters.vid_povrejdenia_value == 5) ||
                (initial_parameters.vid_povrejdenia_value == 6) || ((initial_parameters.vid_povrejdenia_value == 7) && (initial_parameters.type_of_stupen_projiga_value == 1)) || 
                ((initial_parameters.vid_povrejdenia_value == 7) && (initial_parameters.type_of_stupen_projiga_value == 2))) {
                d9 = d9_usual_time;
            }
        }

        d9_new_time = d9;
        let d20 = 75963 + d7 + d9;
        new_time = d20;
        console.log(d20);

        let h = Math.trunc(d20 / 3600);
        let m = Math.trunc(d20 % 3600 / 60);
        let s = Math.trunc(d20 % 3600 % 60);
        console.log(h);
        console.log(m);
        console.log(s);
        if (m < 10) { m = String(`0${m}`) };
        if (s < 10) { s = String(`0${s}`) };

        time_of_new_repair_result.innerHTML = `${h}:${m}:${s}`;
    time_of_new_repair_result.style.color = '#4dad27';
    }

function time_difference_calculation() {
        let difference = usual_time - new_time;
        let h = Math.trunc(difference / 3600);
        let m = Math.trunc(difference % 3600 / 60);
        let s = Math.trunc(difference % 3600 % 60);
        console.log(h);
        console.log(m);
        console.log(s);
        if (m < 10) { m = String(`0${m}`) };
        if (s < 10) { s = String(`0${s}`) };

        time_difference.innerHTML = `${h}:${m}:${s}`;
    time_difference.style.color = '#4dad27';
    }

function percent_calculation() {
        let percent = usual_time / new_time * 100 - 100;
        percent_result.innerHTML = `${percent.toFixed(2)} %`;
    percent_result.style.color = '#4dad27';
        //percent_result.classList.add('percent_result_color');
    }

function reset() {
    for (let i = 0; i < 7; i++) initial_parameters.vid_povrejdenia[i].checked = false;
    for (let i = 0; i < 3; i++) {
        initial_parameters.type_of_stupen_projiga[i].checked = false;
        initial_parameters.type_of_stupen_projiga[i].disabled = false;
    }
    for (let i = 0; i < 2; i++) initial_parameters.number_of_segment[i].checked = false;
    initial_parameters.value_of_distance.value = 5;

    time_of_repair_result.innerHTML = `00:00:00`;
    time_of_repair_result.style.color = '#1f334b';

    time_of_new_repair_result.innerHTML = `00:00:00`;
    time_of_new_repair_result.style.color = '#1f334b';

    percent_result.innerHTML = `0 %`;
    percent_result.style.color = '#1f334b';

    time_difference.innerHTML = `00:00:00`;
    time_difference.style.color = '#1f334b';

    disable_type_of_stupen_projiga();
    inable_type_of_stupen_projiga();
    disable_stupen_projiga_alert();
    disable_segment_alert();
        
    document.querySelectorAll('.menu_time_old')[16].innerHTML = '0:07:30';
    document.querySelectorAll('.menu_time_new')[16].innerHTML = '0:07:30';
    document.querySelectorAll('.motodology_number_old')[3].innerHTML = '1:07:30';
    document.querySelectorAll('.motodology_number_new')[3].innerHTML = '1:07:30';

    document.querySelectorAll('.motodology_number_old')[5].innerHTML = `0:00:00`;
    document.querySelectorAll('.motodology_number_new')[5].innerHTML = `0:00:00`;

    document.querySelectorAll('.motodology_number_old')[6].innerHTML = `0:00:00`;
    document.querySelectorAll('.menu_time_old')[19].innerHTML = `0:00:00`;
    document.querySelectorAll('.menu_time_new')[19].innerHTML = `0:00:00`;
    document.querySelectorAll('.menu_time_old')[20].innerHTML = `0:00:00`;
    document.querySelectorAll('.menu_time_new')[20].innerHTML = `0:00:00`;
    document.querySelectorAll('.menu_time_old')[21].innerHTML = `0:00:00`;
    document.querySelectorAll('.menu_time_new')[21].innerHTML = `0:00:00`;
    document.querySelectorAll('.menu_time_old')[22].innerHTML = `0:00:00`;
    document.querySelectorAll('.menu_time_new')[22].innerHTML = `0:00:00`;
    document.querySelectorAll('.menu_time_old')[23].innerHTML = `0:00:00`;
    document.querySelectorAll('.menu_time_new')[23].innerHTML = `0:00:00`;

    document.querySelectorAll('.motodology_number_old')[4].classList.remove('color');
    document.querySelectorAll('.motodology_number_new')[4].classList.remove('color');

    document.querySelectorAll('.motodology_number_old')[5].classList.remove('color');
    document.querySelectorAll('.motodology_number_new')[5].classList.remove('color');

    document.querySelectorAll('.motodology_number_old')[6].classList.remove('color');
    document.querySelectorAll('.motodology_number_new')[6].classList.remove('color');
    document.querySelectorAll('.menu_time_old')[19].classList.remove('color');
    document.querySelectorAll('.menu_time_new')[19].classList.remove('color');
    document.querySelectorAll('.menu_time_old')[20].classList.remove('color');
    document.querySelectorAll('.menu_time_new')[20].classList.remove('color');
    document.querySelectorAll('.menu_time_old')[21].classList.remove('color');
    document.querySelectorAll('.menu_time_new')[21].classList.remove('color');
    document.querySelectorAll('.menu_time_old')[22].classList.remove('color');
    document.querySelectorAll('.menu_time_new')[22].classList.remove('color');
    document.querySelectorAll('.menu_time_old')[23].classList.remove('color');
    document.querySelectorAll('.menu_time_new')[23].classList.remove('color');

    //document.querySelectorAll('.motodology_number_old')[14].classList.remove('color');
    //document.querySelectorAll('.motodology_number_new')[14].classList.remove('color');

    for (let i = 0; i < 12; i++) {
        document.querySelectorAll('.cirkul_border')[i].classList.remove('show');
        document.querySelectorAll('.cirkul')[i].classList.remove('show');
    }
}

function inable_vid_povrejdenia_alert() {
    document.querySelectorAll('.input_data_colum_1_line')[0].style.visibility = 'visible';
    document.querySelectorAll('.input_data_colum_1_line')[0].style.opacity = 1;
    document.querySelectorAll('.alert')[0].style.visibility = 'visible';
    document.querySelectorAll('.alert')[0].style.opacity = 1;
    document.querySelector('.input_data_colum_1').classList.add('red');
}

function disable_distance_alert() {
    document.querySelectorAll('.distance_line')[0].style.visibility = 'hidden';
    document.querySelectorAll('.distance_line')[0].style.opacity = '0';
    document.querySelectorAll('.alert')[1].style.visibility = 'hidden';
    document.querySelectorAll('.alert')[1].style.opacity = '0';
    document.querySelectorAll('.segment_line')[0].style.visibility = 'hidden';
    document.querySelectorAll('.segment_line')[0].style.opacity = '0';
    document.querySelectorAll('.alert')[2].style.visibility = 'hidden';
    document.querySelectorAll('.alert')[2].style.opacity = '0';

    document.querySelector('.distance').classList.remove('red');
}

function disable_segment_alert() {
    document.querySelectorAll('.segment_line')[0].style.visibility = 'hidden';
    document.querySelectorAll('.segment_line')[0].style.opacity = '0';
    document.querySelectorAll('.alert')[2].style.visibility = 'hidden';
    document.querySelectorAll('.alert')[2].style.opacity = '0';

    document.querySelector('.segment').classList.remove('red');
}

function disable_type_of_stupen_projiga() {
     
    for (let i = 0; i < 3; i++) {
        initial_parameters.type_of_stupen_projiga[i].disabled = true;
        initial_parameters.type_of_stupen_projiga[i].checked = false;
    }
    document.querySelectorAll('.input_data_colum_1_line')[0].style.visibility = 'hidden';
    document.querySelectorAll('.input_data_colum_1_line')[0].style.opacity = 0;
    document.querySelectorAll('.alert')[0].style.visibility = 'hidden';
    document.querySelectorAll('.alert')[0].style.opacity = 0;
        
    document.querySelector('.stupen_projiga').classList.add('hidden');

    document.querySelector('.input_data_colum_1').classList.remove('red');

        //document.querySelector('.stupen_projiga').style.visibility = 'hidden';
        //document.querySelector('.stupen_projiga').style.opacity = '0';
        
        ////document.querySelector('.stupen_projiga_text').style.color = 'gray';
        //document.querySelector('.stupen_projiga_text').style.visibility = 'hidden';
        //for (let i = 0; i < 3; i++) {
        //    //document.querySelectorAll('.number_of_stupen_projiga')[i].style.color = 'gray';
        //    document.querySelectorAll('.number_of_stupen_projiga')[i].style.visibility = 'hidden';
        //}
}

function inable_type_of_stupen_projiga() {
    for (let i = 0; i < 3; i++) initial_parameters.type_of_stupen_projiga[i].disabled = false;
    document.querySelectorAll('.input_data_colum_1_line')[0].style.visibility = 'hidden';
    document.querySelectorAll('.input_data_colum_1_line')[0].style.opacity = 0;
    document.querySelectorAll('.alert')[0].style.visibility = 'hidden';
    document.querySelectorAll('.alert')[0].style.opacity = 0;
    
    document.querySelector('.stupen_projiga').classList.remove('hidden');

    document.querySelector('.input_data_colum_1').classList.remove('red');

    //document.querySelector('.stupen_projiga').style.visibility = 'visible';
    //document.querySelector('.stupen_projiga').style.opacity = '1';
        
    ////document.querySelector('.stupen_projiga_text').style.color = '#1f334b';
    //document.querySelector('.stupen_projiga_text').style.visibility = 'visible';
    //for (let i = 0; i < 3; i++) {
    //    document.querySelectorAll('.number_of_stupen_projiga')[i].style.visibility = 'visible';
    //    //document.querySelectorAll('.number_of_stupen_projiga')[i].style.color = '#1f334b';
    //}
}

function disable_stupen_projiga_alert() {
    document.querySelectorAll('.stupen_projiga_line')[0].style.visibility = 'hidden';
    document.querySelectorAll('.stupen_projiga_line')[0].style.opacity = '0';
    document.querySelectorAll('.alert')[3].style.visibility = 'hidden';
    document.querySelectorAll('.alert')[3].style.opacity = '0';

    document.querySelector('.stupen_projiga').classList.remove('red');
    }

function reset_parameters() {
        initial_parameters.vid_povrejdenia_value = 0;
        initial_parameters.type_of_stupen_projiga_value = 0;
        initial_parameters.number_of_segment_value = 0;
        initial_parameters.value_of_distance_value = 0;
        d9_usual_time = 0;
        new_time = 0;
        usual_time = 0;
}

function marsh_time() {
    let marsh_time_value = initial_parameters.value_of_distance_value * 90;
    
    let h = Math.trunc(marsh_time_value / 3600);
    let m = Math.trunc(marsh_time_value % 3600 / 60);
    let s = Math.trunc(marsh_time_value % 3600 % 60);
    if (m < 10) { m = String(`0${m}`) };
    if (s < 10) { s = String(`0${s}`) };

    document.querySelectorAll('.menu_time_old')[16].innerHTML = `${h}:${m}:${s}`;
    document.querySelectorAll('.menu_time_new')[16].innerHTML = `${h}:${m}:${s}`;

    let technical_time = marsh_time_value + 3600;

    h = Math.trunc(technical_time / 3600);
    m = Math.trunc(technical_time % 3600 / 60);
    s = Math.trunc(technical_time % 3600 % 60);
    if (m < 10) { m = String(`0${m}`) };
    if (s < 10) { s = String(`0${s}`) };

    document.querySelectorAll('.motodology_number_old')[3].innerHTML = `${h}:${m}:${s}`;
    document.querySelectorAll('.motodology_number_new')[3].innerHTML = `${h}:${m}:${s}`;
}

function relative_metod() {    
    let h = Math.trunc(d9_usual_time / 3600);
    let m = Math.trunc(d9_usual_time % 3600 / 60);
    let s = Math.trunc(d9_usual_time % 3600 % 60);
    if (m < 10) { m = String(`0${m}`) };
    if (s < 10) { s = String(`0${s}`) };

    document.querySelectorAll('.motodology_number_old')[5].innerHTML = `${h}:${m}:${s}`;

    h = Math.trunc(d9_new_time / 3600);
    m = Math.trunc(d9_new_time % 3600 / 60);
    s = Math.trunc(d9_new_time % 3600 % 60);
    if (m < 10) { m = String(`0${m}`) };
    if (s < 10) { s = String(`0${s}`) };

    document.querySelectorAll('.motodology_number_new')[5].innerHTML = `${h}:${m}:${s}`;
}

function logical_metod() {
    let h = Math.trunc(d10_usual_time / 3600);
    let m = Math.trunc(d10_usual_time % 3600 / 60);
    let s = Math.trunc(d10_usual_time % 3600 % 60);
    if (m < 10) { m = String(`0${m}`) };
    if (s < 10) { s = String(`0${s}`) };

    document.querySelectorAll('.motodology_number_old')[6].innerHTML = `${h}:${m}:${s}`;
    document.querySelectorAll('.menu_time_old')[19].innerHTML = `1:00:00`;
    document.querySelectorAll('.menu_time_old')[20].innerHTML = `0:30:00`;
    document.querySelectorAll('.menu_time_old')[21].innerHTML = `0:30:00`;
    document.querySelectorAll('.menu_time_old')[22].innerHTML = `0:15:00`;
    document.querySelectorAll('.menu_time_old')[23].innerHTML = `0:30:00`;
}

function color_light() {
    document.querySelectorAll('.motodology_number_old')[4].classList.add('color');
    document.querySelectorAll('.motodology_number_new')[4].classList.add('color');

    if (d9_usual_time == d9_new_time) {
        document.querySelectorAll('.motodology_number_old')[5].classList.remove('color');
        document.querySelectorAll('.motodology_number_new')[5].classList.remove('color');
    } else {
        document.querySelectorAll('.motodology_number_old')[5].classList.add('color');
        document.querySelectorAll('.motodology_number_new')[5].classList.add('color');
    }



    if (initial_parameters.number_of_segment_value == 1) {
        document.querySelectorAll('.motodology_number_old')[6].classList.add('color');
        document.querySelectorAll('.motodology_number_new')[6].classList.add('color');
        document.querySelectorAll('.menu_time_old')[19].classList.add('color');
        document.querySelectorAll('.menu_time_new')[19].classList.add('color');
        document.querySelectorAll('.menu_time_old')[20].classList.add('color');
        document.querySelectorAll('.menu_time_new')[20].classList.add('color');
        document.querySelectorAll('.menu_time_old')[21].classList.add('color');
        document.querySelectorAll('.menu_time_new')[21].classList.add('color');
        document.querySelectorAll('.menu_time_old')[22].classList.add('color');
        document.querySelectorAll('.menu_time_new')[22].classList.add('color');
        document.querySelectorAll('.menu_time_old')[23].classList.add('color');
        document.querySelectorAll('.menu_time_new')[23].classList.add('color');
    } else {
        document.querySelectorAll('.motodology_number_old')[6].classList.remove('color');
        document.querySelectorAll('.motodology_number_new')[6].classList.remove('color');
        document.querySelectorAll('.menu_time_old')[19].classList.remove('color');
        document.querySelectorAll('.menu_time_new')[19].classList.remove('color');
        document.querySelectorAll('.menu_time_old')[20].classList.remove('color');
        document.querySelectorAll('.menu_time_new')[20].classList.remove('color');
        document.querySelectorAll('.menu_time_old')[21].classList.remove('color');
        document.querySelectorAll('.menu_time_new')[21].classList.remove('color');
        document.querySelectorAll('.menu_time_old')[22].classList.remove('color');
        document.querySelectorAll('.menu_time_new')[22].classList.remove('color');
        document.querySelectorAll('.menu_time_old')[23].classList.remove('color');
        document.querySelectorAll('.menu_time_new')[23].classList.remove('color');
    }

    //document.querySelectorAll('.motodology_number_old')[14].classList.add('color');
    //document.querySelectorAll('.motodology_number_new')[14].classList.add('color');
}

function last_function() {
        if (check_vid_povrejdenia()) {
            definition_vid_povrejdenia();
            if (check_distance()) {
                definition_distance();
                if (check_number_of_segment()) {
                    definition_number_of_segment();
                    if (check_type_of_stupen_projiga()) {
                        definition_type_of_stupen_projiga();
                        time_calculation();
                        time_calculation_new();
                        percent_calculation();
                        time_difference_calculation();
                        marsh_time();
                        relative_metod();
                        logical_metod();
                        color_light();
                        reset_parameters();
                    }
                }                    
            }
        }
}

function menu_show() {
    menu.classList.toggle('show');
    button_mini_line_1[0].classList.toggle('rotate');
    button_mini_line_2[0].classList.toggle('opacity');
    button_mini_line_3[0].classList.toggle('rotate');
}
function menu_show_1() {
    menu_1.classList.toggle('show');
    button_mini_line_1[1].classList.toggle('rotate');
    button_mini_line_2[1].classList.toggle('opacity');
    button_mini_line_3[1].classList.toggle('rotate');
}
function menu_show_2() {
    menu_2.classList.toggle('show');
    button_mini_line_1[2].classList.toggle('rotate');
    button_mini_line_2[2].classList.toggle('opacity');
    button_mini_line_3[2].classList.toggle('rotate');
}
function menu_show_3() {
    menu_3.classList.toggle('show');
    button_mini_line_1[3].classList.toggle('rotate');
    button_mini_line_2[3].classList.toggle('opacity');
    button_mini_line_3[3].classList.toggle('rotate');
}
function menu_show_4() {
    menu_4.classList.toggle('show');
    button_mini_line_1[4].classList.toggle('rotate');
    button_mini_line_2[4].classList.toggle('opacity');
    button_mini_line_3[4].classList.toggle('rotate');
}
function menu_show_5() {
    menu_5.classList.toggle('show');
    button_mini_line_1[5].classList.toggle('rotate');
    button_mini_line_2[5].classList.toggle('opacity');
    button_mini_line_3[5].classList.toggle('rotate');
}
function menu_show_6() {
    menu_6.classList.toggle('show');
    button_mini_line_1[6].classList.toggle('rotate');
    button_mini_line_2[6].classList.toggle('opacity');
    button_mini_line_3[6].classList.toggle('rotate');
}
function menu_show_7() {
    menu_7.classList.toggle('show');
    button_mini_line_1[7].classList.toggle('rotate');
    button_mini_line_2[7].classList.toggle('opacity');
    button_mini_line_3[7].classList.toggle('rotate');
}
function menu_show_8() {
    menu_8.classList.toggle('show');
    button_mini_line_1[8].classList.toggle('rotate');
    button_mini_line_2[8].classList.toggle('opacity');
    button_mini_line_3[8].classList.toggle('rotate');
}
function menu_show_9() {
    menu_9.classList.toggle('show');
    button_mini_line_1[9].classList.toggle('rotate');
    button_mini_line_2[9].classList.toggle('opacity');
    button_mini_line_3[9].classList.toggle('rotate');
}

function input() {
    if (initial_parameters.vid_povrejdenia[0].checked == false) {
        initial_parameters.vid_povrejdenia[0].checked = true;
    } else {
        initial_parameters.vid_povrejdenia[0].checked = false;
    }
    
    document.querySelectorAll('.cirkul_border')[0].classList.toggle('show');
    document.querySelectorAll('.cirkul')[0].classList.toggle('show');
    for (let i = 1; i < 7; i++) {
        document.querySelectorAll('.cirkul_border')[i].classList.remove('show');
        document.querySelectorAll('.cirkul')[i].classList.remove('show');
    }
    disable_stupen_projiga_alert();
    disable_type_of_stupen_projiga();
}
function input_1() {
    if (initial_parameters.vid_povrejdenia[1].checked == false) {
        initial_parameters.vid_povrejdenia[1].checked = true;
    } else {
        initial_parameters.vid_povrejdenia[1].checked = false;
    }
    document.querySelectorAll('.cirkul_border')[1].classList.toggle('show');
    document.querySelectorAll('.cirkul')[1].classList.toggle('show');
    for (let i = 0; i < 7; i++) {
        if (i != 1) {
            document.querySelectorAll('.cirkul_border')[i].classList.remove('show');
            document.querySelectorAll('.cirkul')[i].classList.remove('show');
        }        
    }
    disable_stupen_projiga_alert();
    disable_type_of_stupen_projiga();
}
function input_2() {
    if (initial_parameters.vid_povrejdenia[2].checked == false) {
        initial_parameters.vid_povrejdenia[2].checked = true;
    } else {
        initial_parameters.vid_povrejdenia[2].checked = false;
    }
    document.querySelectorAll('.cirkul_border')[2].classList.toggle('show');
    document.querySelectorAll('.cirkul')[2].classList.toggle('show');
    for (let i = 0; i < 7; i++) {
        if (i != 2) {
            document.querySelectorAll('.cirkul_border')[i].classList.remove('show');
            document.querySelectorAll('.cirkul')[i].classList.remove('show');
        }
    }
    disable_stupen_projiga_alert();
    inable_type_of_stupen_projiga();
}
function input_3() {
    if (initial_parameters.vid_povrejdenia[3].checked == false) {
        initial_parameters.vid_povrejdenia[3].checked = true;
    } else {
        initial_parameters.vid_povrejdenia[3].checked = false;
    }
    document.querySelectorAll('.cirkul_border')[3].classList.toggle('show');
    document.querySelectorAll('.cirkul')[3].classList.toggle('show');
    for (let i = 0; i < 7; i++) {
        if (i != 3) {
            document.querySelectorAll('.cirkul_border')[i].classList.remove('show');
            document.querySelectorAll('.cirkul')[i].classList.remove('show');
        }
    }
    disable_stupen_projiga_alert();
    disable_type_of_stupen_projiga();
}
function input_4() {
    if (initial_parameters.vid_povrejdenia[4].checked == false) {
        initial_parameters.vid_povrejdenia[4].checked = true;
    } else {
        initial_parameters.vid_povrejdenia[4].checked = false;
    }
    document.querySelectorAll('.cirkul_border')[4].classList.toggle('show');
    document.querySelectorAll('.cirkul')[4].classList.toggle('show');
    for (let i = 0; i < 7; i++) {
        if (i != 4) {
            document.querySelectorAll('.cirkul_border')[i].classList.remove('show');
            document.querySelectorAll('.cirkul')[i].classList.remove('show');
        }
    }
    disable_stupen_projiga_alert();
    inable_type_of_stupen_projiga();
}
function input_5() {
    if (initial_parameters.vid_povrejdenia[5].checked == false) {
        initial_parameters.vid_povrejdenia[5].checked = true;
    } else {
        initial_parameters.vid_povrejdenia[5].checked = false;
    }
    document.querySelectorAll('.cirkul_border')[5].classList.toggle('show');
    document.querySelectorAll('.cirkul')[5].classList.toggle('show');
    for (let i = 0; i < 7; i++) {
        if (i != 5) {
            document.querySelectorAll('.cirkul_border')[i].classList.remove('show');
            document.querySelectorAll('.cirkul')[i].classList.remove('show');
        }
    }
    disable_stupen_projiga_alert();
    inable_type_of_stupen_projiga();
}
function input_6() {
    if (initial_parameters.vid_povrejdenia[6].checked == false) {
        initial_parameters.vid_povrejdenia[6].checked = true;
    } else {
        initial_parameters.vid_povrejdenia[6].checked = false;
    }
    document.querySelectorAll('.cirkul_border')[6].classList.toggle('show');
    document.querySelectorAll('.cirkul')[6].classList.toggle('show');
    for (let i = 0; i < 7; i++) {
        if (i != 6) {
            document.querySelectorAll('.cirkul_border')[i].classList.remove('show');
            document.querySelectorAll('.cirkul')[i].classList.remove('show');
        }
    }
    disable_stupen_projiga_alert();
    inable_type_of_stupen_projiga();
}
function input_7() {
    if (initial_parameters.number_of_segment[0].checked == false) {
        initial_parameters.number_of_segment[0].checked = true;
    } else {
        initial_parameters.number_of_segment[0].checked = false;
    }
    document.querySelectorAll('.cirkul_border')[7].classList.toggle('show');
    document.querySelectorAll('.cirkul')[7].classList.toggle('show');
    document.querySelectorAll('.cirkul_border')[8].classList.remove('show');
    document.querySelectorAll('.cirkul')[8].classList.remove('show');

    disable_segment_alert();
}
function input_8() {
    if (initial_parameters.number_of_segment[1].checked == false) {
        initial_parameters.number_of_segment[1].checked = true;
    } else {
        initial_parameters.number_of_segment[1].checked = false;
    }
    document.querySelectorAll('.cirkul_border')[8].classList.toggle('show');
    document.querySelectorAll('.cirkul')[8].classList.toggle('show');
    document.querySelectorAll('.cirkul_border')[7].classList.remove('show');
    document.querySelectorAll('.cirkul')[7].classList.remove('show');

    disable_segment_alert();
}
function input_9() {
    if (initial_parameters.type_of_stupen_projiga[0].checked == false) {
        initial_parameters.type_of_stupen_projiga[0].checked = true;
    } else {
        initial_parameters.type_of_stupen_projiga[0].checked = false;
    }
        document.querySelectorAll('.cirkul_border')[9].classList.toggle('show');
        document.querySelectorAll('.cirkul')[9].classList.toggle('show');
        for (let i = 9; i < 12; i++) {
            if (i != 9) {
                document.querySelectorAll('.cirkul_border')[i].classList.remove('show');
                document.querySelectorAll('.cirkul')[i].classList.remove('show');
            }
        }
    disable_stupen_projiga_alert();
}
function input_10() {
    if (initial_parameters.type_of_stupen_projiga[1].checked == false) {
        initial_parameters.type_of_stupen_projiga[1].checked = true;
    } else {
        initial_parameters.type_of_stupen_projiga[1].checked = false;
    }
    document.querySelectorAll('.cirkul_border')[10].classList.toggle('show');
    document.querySelectorAll('.cirkul')[10].classList.toggle('show');
    for (let i = 9; i < 12; i++) {
        if (i != 10) {
            document.querySelectorAll('.cirkul_border')[i].classList.remove('show');
            document.querySelectorAll('.cirkul')[i].classList.remove('show');
        }
    }
    disable_stupen_projiga_alert();
}
function input_11() {
    if (initial_parameters.type_of_stupen_projiga[2].checked == false) {
        initial_parameters.type_of_stupen_projiga[2].checked = true;
    } else {
        initial_parameters.type_of_stupen_projiga[2].checked = false;
    }
    document.querySelectorAll('.cirkul_border')[11].classList.toggle('show');
    document.querySelectorAll('.cirkul')[11].classList.toggle('show');
    for (let i = 9; i < 12; i++) {
        if (i != 11) {
            document.querySelectorAll('.cirkul_border')[i].classList.remove('show');
            document.querySelectorAll('.cirkul')[i].classList.remove('show');
        }
    }
    disable_stupen_projiga_alert();
}

//document.querySelectorAll('.input')[0].addEventListener("click", disable_type_of_stupen_projiga);
//document.querySelectorAll('.input')[1].addEventListener("click", disable_type_of_stupen_projiga);
//document.querySelectorAll('.input')[3].addEventListener("click", disable_type_of_stupen_projiga);
//document.querySelectorAll('.input')[2].addEventListener("click", inable_type_of_stupen_projiga);
//document.querySelectorAll('.input')[4].addEventListener("click", inable_type_of_stupen_projiga);
//document.querySelectorAll('.input')[5].addEventListener("click", inable_type_of_stupen_projiga);
//document.querySelectorAll('.input')[6].addEventListener("click", inable_type_of_stupen_projiga);

document.querySelectorAll('.input')[0].addEventListener("click", input);
document.querySelectorAll('.input')[1].addEventListener("click", input_1);
document.querySelectorAll('.input')[2].addEventListener("click", input_2);
document.querySelectorAll('.input')[3].addEventListener("click", input_3);
document.querySelectorAll('.input')[4].addEventListener("click", input_4);
document.querySelectorAll('.input')[5].addEventListener("click", input_5);
document.querySelectorAll('.input')[6].addEventListener("click", input_6);
document.querySelectorAll('.type_of_segment')[0].addEventListener("click", input_7);
document.querySelectorAll('.type_of_segment')[1].addEventListener("click", input_8);
document.querySelectorAll('.number_of_stupen_projiga')[0].addEventListener("click", input_9);
document.querySelectorAll('.number_of_stupen_projiga')[1].addEventListener("click", input_10);
document.querySelectorAll('.number_of_stupen_projiga')[2].addEventListener("click", input_11);

//document.querySelectorAll('.number_of_stupen_projiga')[0].addEventListener("click", disable_stupen_projiga_alert);
//document.querySelectorAll('.number_of_stupen_projiga')[1].addEventListener("click", disable_stupen_projiga_alert);
//document.querySelectorAll('.number_of_stupen_projiga')[2].addEventListener("click", disable_stupen_projiga_alert);

initial_parameters.value_of_distance.addEventListener("click", disable_distance_alert);

//document.querySelectorAll('.type_of_segment')[0].addEventListener("click", disable_segment_alert);
//document.querySelectorAll('.type_of_segment')[1].addEventListener("click", disable_segment_alert);

button.addEventListener("click", last_function);
button_reset.addEventListener("click", reset);

button_mini.addEventListener("click", menu_show);
document.querySelectorAll('.motodology_text_header')[1].addEventListener("click", menu_show);
button_mini_1.addEventListener("click", menu_show_1);
document.querySelectorAll('.motodology_text_header')[2].addEventListener("click", menu_show_1);
button_mini_2.addEventListener("click", menu_show_2);
document.querySelectorAll('.motodology_text_header')[3].addEventListener("click", menu_show_2);
button_mini_3.addEventListener("click", menu_show_3);
document.querySelectorAll('.motodology_text_header')[6].addEventListener("click", menu_show_3);
button_mini_4.addEventListener("click", menu_show_4);
document.querySelectorAll('.motodology_text_header')[7].addEventListener("click", menu_show_4);
button_mini_5.addEventListener("click", menu_show_5);
document.querySelectorAll('.motodology_text_header')[9].addEventListener("click", menu_show_5);
button_mini_6.addEventListener("click", menu_show_6);
document.querySelectorAll('.motodology_text_header')[10].addEventListener("click", menu_show_6);
button_mini_7.addEventListener("click", menu_show_7);
document.querySelectorAll('.motodology_text_header')[11].addEventListener("click", menu_show_7);
button_mini_8.addEventListener("click", menu_show_8);
document.querySelectorAll('.motodology_text_header')[12].addEventListener("click", menu_show_8);
button_mini_9.addEventListener("click", menu_show_9);
document.querySelectorAll('.motodology_text_header')[13].addEventListener("click", menu_show_9);

console.log(document.querySelectorAll('.menu_time_old'));