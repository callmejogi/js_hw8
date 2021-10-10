let year = +prompt(`В каком году вы родились?`);
let age ;
let refusedToInsert = "Жаль, что Вы не захотели ввести свой ";
let likeChampion = "Потрясающе! Хочешь стать как ";
let favSport;
let nativeCity;
let capital = `Ты живешь в столице`;

if (year !== null){
    nativeCity = prompt(`В каком городе вы живете?`);
    }        
else{
    alert(`${refusedToInsert} год рождения`);
}

if (nativeCity !== null ){
    favSport = prompt(`Какой ваш любимый вид спорта?`);
}else{
    alert(`${refusedToInsert}город`);
}

switch (nativeCity){
    case `Киев`:
        `${capital} Украины`;
        break;
    case `Москва`:
    `${capital} России`;
        break;
    case `Минск`:
        `${capital} Беларуси`;
        break;
    default:
        `Ты живешь в городе ${nativeCity}`;
}

switch(favSport){
    case `Футбол`:
        `${likeChampion}Роналду`;
        break;
    case `Бокс`:
    `${likeChampion}Кличко`;
        break;
    case `Баскетбол`:
        `${likeChampion}Джордан`;
        break;
    default:
        `Твой любимый спорт - это ${favSport}`;
}

if (favSport !==null){
    alert(`Вы ${year} года рождения, ${nativeCity}, ${favSport}`);
}else(`${refusedToInsert}любимый вид спорта`)