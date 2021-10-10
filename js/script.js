let year = prompt(`В каком году вы родились?`);

let refusedToInsert = `Жаль, что Вы не захотели ввести свой(ю)`;

let city;

let yourCity;

let captial = `Ты живешь в столице`;

let sport;

let mySport;

if (year !== null ){
    city = prompt(`В каком городе ты живешь?`);
    yourCity = `Ты живешь в городе ${city}`;
    if (city !== null){
        sport = prompt(`Какой ваш любимый вид спорта?`);
        mySport = `твой любимый вид спорта ${sport}`
    }else{
        alert(`${refusedToInsert} город`);
    };

    if (city === `Киев`){
        yourCity = `Ты живешь в столице Украины`;
    }else if (city === `Москва`){
        yourCity = `Ты живешь в столице России`;
    }else if (city === `Минск`){
        yourCity = `Ты живешь в столице Беларуси`;
    };

    if (sport === `футбол`) {
        mySport = `Круто, хочешь стать как Лионель Месси`;
    }else if (sport === `баскетбол`){
        mySport = `Круто, хочешь стать как Майкл Джордан`;
    }else if (sport === `бокс`){
        mySport = `Круто, хочешь стать как Майк Тайсон`;
    };

    if (sport !== null ){
    alert(`Тебе ${2021 - year} лет, ${yourCity}, ${mySport}`);
    }else{
        alert(`${refusedToInsert} свой любимый вид спорта)`);
    }

}else{
    alert(`${refusedToInsert} год рождения`);
}