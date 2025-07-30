const standArrow = document.getElementById('arrow');
const name = document.getElementById('StandName');
const info = document.getElementById('StandInfo');
const stats = document.getElementById('StandStats');
const image = document.getElementById('StandImage');
const link = document.getElementById('StandLink');
const div = document.getElementById('StandDiv');

standArrow.addEventListener('click', () => {

    let randomNumber = Math.floor(Math.random() * 169) + 1;
    console.log(randomNumber);

    div.classList.remove('not-using');
    link.textContent = 'Learn more info about this Stand';

    name.textContent = '';
    info.textContent = '';
    stats.src = '';
    image.src = '';
    link.href = '';

    if (randomNumber === 1){
        name.textContent = 'Star Platinum';
        info.textContent = 'Star Platinum may have a short range, but boasts unparalleled speed, power, and precision. It is called the most powerful Stand in the series, and along with' +
        ' its superhuman strength, it can also stop time for a couple of seconds.';
        stats.src = 'StandStatsImgs/StarPlatinumStats.png';
        image.src = 'StandImgs/StarPlatinum.png';
        link.href = 'https://jojowiki.com/Star_Platinum'

    } else if (randomNumber === 2){
        name.textContent = "Magician's Red";
        info.textContent = "Magician's Red has the ability to create and control fire, allowing the user to manipulate its shape into any form you want. It can also allowing you to melt through metal because of the flames' strength.";
        stats.src = 'StandStatsImgs/MagiciansRedStats.png';
        image.src = 'StandImgs/MagiciansRed.png';
        link.href = 'https://jojowiki.com/Magician%27s_Red';

    } else if (randomNumber === 3){
        name.textContent = 'Hermit Purple';
        info.textContent = 'Hermit Purple allow the user to manipulate eletronics and also analyze them. The user can also take pictures of something else anywhere in the world, and also hack a television to see warnings or messages to help.';
        stats.src = 'StandStatsImgs/HermitPurpleStats.png';
        image.src = 'StandImgs/HermitPurple.png'; 
        link.href = 'https://jojowiki.com/Hermit_Purple';

    } else if (randomNumber === 4){
        name.textContent = 'Hierophant Green';
        info.textContent = 'Hierophant Green can shoot out an emerald splash, which is just launching a bunch of emeralds out of its hands. It can also uncoil itself to either protect or hide itself, or attack soemthing because of its sharpness.';
        stats.src = 'StandStatsImgs/HierophantGreenStats.png';
        image.src = 'StandImgs/HierophantGreen.png'; 
        link.href = 'https://jojowiki.com/Hierophant_Green';

    } else if (randomNumber === 5){
        name.textContent = 'Silver Chariot';
        info.textContent = 'Silver Chariot is very quick with its rapier, and very precise as well. It can break off its armour and become even faster, and gains an afterimage effect after its armour gets taken off';
        stats.src = 'StandStatsImgs/SilverChariotStats.png';
        image.src = 'StandImgs/SilverChariot.png'; 
        link.href = 'https://jojowiki.com/Silver_Chariot';

    } else if (randomNumber === 6){
        name.textContent = 'The Fool';
        info.textContent = 'The Fool is made of sand, so it can not be attacked by a lot of enemy Stands. It can create and manipulate sand however it wants, but it does have a short range being its one big weakness';
        stats.src = 'StandStatsImgs/TheFoolStats.png';
        image.src = 'StandImgs/TheFool.png'; 
        link.href = 'https://jojowiki.com/The_Fool';

    } else if (randomNumber === 7){
        name.textContent = 'The World';
        info.textContent = 'The World is very physically powerful and precise, very similar to Star Platinum. It can also stop time for five seconds.';
        stats.src = 'StandStatsImgs/TheWorldStats.png';
        image.src = 'StandImgs/TheWorld.png'; 
        link.href = 'https://jojowiki.com/The_World';

    } else if (randomNumber === 8){
        name.textContent = 'Yellow Temperance';
        info.textContent = 'Yellow Temperance is a shield that protects the user from all attacks, while also slowly doing damage to whoever attacks the user. The user can also change your appearence into anyone else.';
        stats.src = 'StandStatsImgs/YellowTemperanceStats.png';
        image.src = 'StandImgs/YellowTemperance.png'; 
        link.href = 'https://jojowiki.com/Yellow_Temperance';

    } else if (randomNumber === 9){
        name.textContent = 'Hanged Man';
        info.textContent = 'Hanged Man can be within any reflection, and can attack anyone or anything from within the mirror. It can only get hurt whenever it is transfering from one reflection another';
        stats.src = 'StandStatsImgs/HangedManStats.png';
        image.src = 'StandImgs/HangedMan.png'; 
        link.href = 'https://jojowiki.com/Hanged_Man';

    } else if (randomNumber === 10){
        name.textContent = 'Emperor';
        info.textContent = 'Emperor allows the user to shoot it like a gun, allowing you to manipulate its bullets as well';
        stats.src = 'StandStatsImgs/EmperorStats.png';
        image.src = 'StandImgs/Emperor.png'; 
        link.href = 'https://jojowiki.com/Emperor';

    } else if (randomNumber === 11){
        name.textContent = 'Wheel of Fortune';
        info.textContent = 'Wheel of Fortune transforms a car and be able to change parts of it(like how it made its wheels get spikes to scale a wall). It can also shoot out gasoline bullets and be able to light whatever it shoots on fire.';
        stats.src = 'StandStatsImgs/WheelOfFortuneStats.png';
        image.src = 'StandImgs/WheelOfFortune.png'; 
        link.href = 'https://jojowiki.com/Wheel_of_Fortune';

    } else if (randomNumber === 12){
        name.textContent = 'Justice';
        info.textContent = "Justice can control someone's body if they take any form of damage and Justice can control that body part that was damaged. It is very hard for Justice to get hurt because it is made of fog.";
        stats.src = 'StandStatsImgs/JusticeStats.png';
        image.src = 'StandImgs/Justice.png'; 
        link.href = 'https://jojowiki.com/Justice';

    } else if (randomNumber === 13){
        name.textContent = 'Death Thirteen';
        info.textContent = "Death Thirteen can go into people's dreams, and manipulate everything that happens in the dream. If that person wakes up from the dream, they will forget what happened.";
        stats.src = 'StandStatsImgs/DeathThirteenStats.png';
        image.src = 'StandImgs/DeathThirteen.png'; 
        link.href = 'https://jojowiki.com/Death_Thirteen';

    } else if (randomNumber === 14){
        name.textContent = 'Judgement';
        info.textContent = "Judgement can grant people's wishes and create clay replicas of what they wish for, the user can give them what they want, or trick them and use their wishes to attack them";
        stats.src = 'StandStatsImgs/JudgementStats.png';
        image.src = 'StandImgs/Judgement.png'; 
        link.href = 'https://jojowiki.com/Judgement';

    } else if (randomNumber === 15){
        name.textContent = 'High Priestess';
        info.textContent = 'High Priestess can turn into any mineral, glass, plastic, or metal that is nearby.';
        stats.src = 'StandStatsImgs/HighPriestessStats.png';
        image.src = 'StandImgs/HighPriestess.png'; 
        link.href = 'https://jojowiki.com/High_Priestess';

    } else if (randomNumber === 16){
        name.textContent = 'Geb';
        info.textContent = 'Geb is a water hand that can appear from any form of water.';
        stats.src = 'StandStatsImgs/GebStats.png';
        image.src = 'StandImgs/Geb.png'; 
        link.href = 'https://jojowiki.com/Geb';

    } else if (randomNumber === 17){
        name.textContent = 'Tohth';
        info.textContent = 'Tohth is a manga that can read the near future, everything that is written in book has to happen.';
        stats.src = 'StandStatsImgs/TohthStats.png';
        image.src = 'StandImgs/Tohth.png'; 
        link.href = 'https://jojowiki.com/Tohth';

    } else if (randomNumber === 18){
        name.textContent = 'Bastet';
        info.textContent = 'Bastet is a wall socket that can be put anywhere, if someone touches Bastet they will become a magnet, attracting any form of metal to their body';
        stats.src = 'StandStatsImgs/BastetStats.png';
        image.src = 'StandImgs/Bastet.png'; 
        link.href = 'https://jojowiki.com/Bastet';

    } else if (randomNumber === 19){
        name.textContent = 'Osiris';
        info.textContent = "Osiris can take someone's soul if they bet it on a game, and then turn them into poker chips to bet with";
        stats.src = 'StandStatsImgs/OsirisStats.png';
        image.src = 'StandImgs/Osiris.png'; 
        link.href = 'https://jojowiki.com/Osiris';

    } else if (randomNumber === 20){
        name.textContent = 'Horus';
        info.textContent = 'Horus can freeze the ground around it and throw icicles at nearby foes';
        stats.src = 'StandStatsImgs/HorusStats.png';
        image.src = 'StandImgs/Horus.png'; 
        link.href = 'https://jojowiki.com/Horus';

    } else if (randomNumber === 21){
        name.textContent = 'Tower of Gray';
        info.textContent = 'Tower of Gray is very fast and has an extra mouth that is razor sharp.';
        stats.src = 'StandStatsImgs/TowerOfGrayStats.png';
        image.src = 'StandImgs/TowerOfGray.png'; 
        link.href = 'https://jojowiki.com/Tower_of_Gray';

    } else if (randomNumber === 22){
        name.textContent = 'Dark Blue Moon';
        info.textContent = 'Dark Blue Moon is amazing underwater, and can grow barnacles on everything nearby, and can throw scales at enemies';
        stats.src = 'StandStatsImgs/DarkBlueMoonStats.png';
        image.src = 'StandImgs/DarkBlueMoon.png'; 
        link.href = 'https://jojowiki.com/Dark_Blue_Moon';

    } else if (randomNumber === 23){
        name.textContent = 'Strength';
        info.textContent = 'Strength can turn a small boat into a large freighter, and can control anything inside of the ship.';
        stats.src = 'StandStatsImgs/StrengthStats.png';
        image.src = 'StandImgs/Strength.png'; 
        link.href = 'https://jojowiki.com/Strength';

    } else if (randomNumber === 24){
        name.textContent = 'Ebony Devil';
        info.textContent = 'Ebony Devil allows the user to possess a doll if the user is attacked to be able to get revenge on whoever hurt the user.';
        stats.src = 'StandStatsImgs/EbonyDevilStats.png';
        image.src = 'StandImgs/EbonyDevil.png'; 
        link.href = 'https://jojowiki.com/Ebony_Devil';

    } else if (randomNumber === 25){
        name.textContent = 'Empress';
        info.textContent = 'Empress can put a parasite on a host, and Empress will grow and attack its host';
        stats.src = 'StandStatsImgs/EmpressStats.png';
        image.src = 'StandImgs/Empress.png'; 
        link.href = 'https://jojowiki.com/Empress';

    } else if (randomNumber === 26){
        name.textContent = 'Lovers';
        info.textContent = 'Lovers can choose a victim, and if the user is hurt, the victim will get a reflection of that damage. It can also make organic waste clones of itself.';
        stats.src = 'StandStatsImgs/LoversStats.png';
        image.src = 'StandImgs/Lovers.png'; 
        link.href = 'https://jojowiki.com/Lovers';

    } else if (randomNumber === 27){
        name.textContent = 'Sun';
        info.textContent = 'Sun creates a fake Sun over the user, and can shoot rays of light energy';
        stats.src = 'StandStatsImgs/SunStats.png';
        image.src = 'StandImgs/Sun.png'; 
        link.href = 'https://jojowiki.com/Sun';

    } else if (randomNumber === 28){
        name.textContent = 'Khnum';
        info.textContent = "Khnum can change the user's appearence, weight, scent, and voice";
        stats.src = 'StandStatsImgs/KhnumStats.png';
        image.src = 'StandImgs/Khnum.png';
        link.href = 'https://jojowiki.com/Khnum';

    } else if (randomNumber === 29){
        name.textContent = 'Anubis';
        info.textContent = 'Anubis can mind control anyone who touches the sword. The sword can attack through objects. Whenever it is defeated, it learns from its mistakes';
        stats.src = 'StandStatsImgs/AnubisStats.png';
        image.src = 'StandImgs/Anubis.png'; 
        link.href = 'https://jojowiki.com/Anubis';

    } else if (randomNumber === 30){
        name.textContent = 'Sethan';
        info.textContent = "Sethan can make anyone younger whenever they step into the  user's shadow";
        stats.src = 'StandStatsImgs/SethanStats.png';
        image.src = 'StandImgs/Sethan.png'; 
        link.href = 'https://jojowiki.com/Sethan';

    } else if (randomNumber === 31){
        name.textContent = 'Atum';
        info.textContent = "Atum can take people's souls if they bet on it, and Atum can look into people's souls and ask it a yes or no question";
        stats.src = 'StandStatsImgs/AtumStats.png';
        image.src = 'StandImgs/Atum.png'; 
        link.href = 'https://jojowiki.com/Atum';

    } else if (randomNumber === 32){
        name.textContent = 'Cream';
        info.textContent = 'Cream can bring out a void, and whatever it touches will be completely erased!';
        stats.src = 'StandStatsImgs/CreamStats.png';
        image.src = 'StandImgs/Cream.png'; 
        link.href = 'https://jojowiki.com/Cream';

    } else if (randomNumber === 33){
        name.textContent = 'Crazy Diamond';
        info.textContent = 'Crazy Diamond has strength and precision, along with being able to heal anyone or anything but the user';
        stats.src = 'StandStatsImgs/CrazyDiamondStats.png';
        image.src = 'StandImgs/CrazyDiamond.png'; 
        link.href = 'https://jojowiki.com/Crazy_Diamond';

    } else if (randomNumber === 34){
        name.textContent = 'The Hand';
        info.textContent = 'The Hand can eliminate space wherever the it swings its right hand.';
        stats.src = 'StandStatsImgs/TheHandStats.png';
        image.src = 'StandImgs/TheHand.png'; 
        link.href = 'https://jojowiki.com/The_Hand';

    } else if (randomNumber === 35){
        name.textContent = 'Echoes Act 1';
        info.textContent = 'Echoes Act 1 can create onomatopoeias that will recreate that sound';
        stats.src = 'StandStatsImgs/EchoesActOneStats.png';
        image.src = 'StandImgs/EchoesActOne.png'; 
        link.href = 'https://jojowiki.com/Echoes';

    } else if (randomNumber === 36){
        name.textContent = 'Echoes Act 2';
        info.textContent = 'Echoes Act 2 can create onomatopeias that create and will be able to create whatever the word says.';
        stats.src = 'StandStatsImgs/EchoesActTwoStats.png';
        image.src = 'StandImgs/EchoesActTwo.png'
        link.href = 'https://jojowiki.com/Echoes';

    } else if (randomNumber === 37){
        name.textContent = 'Echoes Act 3';
        info.textContent = 'Echoes Act 3 can push anything straight to the ground with three freeze.';
        stats.src = 'StandStatsImgs/EchoesActThreeStats.png';
        image.src = 'StandImgs/EchoesActThree.png'
        link.href = 'https://jojowiki.com/Echoes';

    } else if (randomNumber === 38){
        name.textContent = "Heaven's Door"
        info.textContent = "Heaven's Door can turn anyone into a book where the user can write whatever they want into them.";
        stats.src = 'StandStatsImgs/HeavensDoorStats.png';
        image.src = 'StandImgs/HeavensDoor.png'
        link.href = 'https://jojowiki.com/Heaven%27s_Door';

    } else if (randomNumber === 39){
        name.textContent = 'Killer Queen';
        info.textContent = 'Killer Queen can turn anything that it touches into a bomb. It also has the automatic Sheer Heart Attack bomb and Bites the Dust that can go back in time';
        stats.src = 'StandStatsImgs/KillerQueenStats.png';
        image.src = 'StandImgs/KillerQueen.png'
        link.href = 'https://jojowiki.com/Killer_Queen';

    } else if (randomNumber === 40){
        name.textContent = 'Aqua Necklace';
        info.textContent = 'Aqua Necklace is made of water, and if someone injests it, Aqua Necklace can kill the victim instantly';
        stats.src = 'StandStatsImgs/AquaNecklaceStats.png';
        image.src = 'StandImgs/AquaNecklace.png'
        link.href = 'https://jojowiki.com/Aqua_Necklace';

    } else if (randomNumber === 41){
        name.textContent = 'Bad Company';
        info.textContent = 'Bad Company is an unbreakable army of living toy soldiers, small landmines, and helicopters.';
        stats.src = 'StandStatsImgs/BadCompanyStats.png';
        image.src = 'StandImgs/BadCompany.png'
        link.href = 'https://jojowiki.com/Bad_Company';

    } else if (randomNumber === 42){
        name.textContent = 'The Lock';
        info.textContent = 'The Lock will appear whenever someone feels guilty, and if it gets worse, the victim will be crushed by the weight of their guilt';
        stats.src = 'StandStatsImgs/TheLockStats.png';
        image.src = 'StandImgs/TheLock.png'
        link.href = 'https://jojowiki.com/The_Lock';

    } else if (randomNumber === 43){
        name.textContent = 'Surface';
        info.textContent = 'Surface will force a victim to do what Surface does when Surface can see the victim, but this will only happen if the victim touches Surface and the Stand can transform into a perfect replica of the victim';
        stats.src = 'StandStatsImgs/SurfaceStats.png';
        image.src = 'StandImgs/Surface.png'
        link.href = 'https://jojowiki.com/Surface';

    } else if (randomNumber === 44){
        name.textContent = 'Love Deluxe';
        info.textContent = "Love Deluxe can manipulate the user's hair, it can be very strong and grow the user's hair as well";
        stats.src = 'StandStatsImgs/LoveDeluxeStats.png';
        image.src = 'StandImgs/LoveDeluxe.png'
        link.href = 'https://jojowiki.com/Love_Deluxe';

    } else if (randomNumber === 45){
        name.textContent = 'Red Hot Chili Pepper';
        info.textContent = 'Red Hot Chili Pepper can absorb electricty, the more it gets, the more powerful and quick it gets. It can also travel through electrical currents';
        stats.src = 'StandStatsImgs/RedHotChiliPepperStats.png';
        image.src = 'StandImgs/RedHotChiliPepper.png'
        link.href = 'https://jojowiki.com/Red_Hot_Chili_Pepper';

    } else if (randomNumber === 46){
        name.textContent = 'Ratt';
        info.textContent = 'Ratt can shoot bullets that can melt anything organic';
        stats.src = 'StandStatsImgs/RattStats.png';
        image.src = 'StandImgs/Ratt.png'
        link.href = 'https://jojowiki.com/Ratt';

    } else if (randomNumber === 47){
        name.textContent = 'Harvest';
        info.textContent = 'Harvest can go and harvest anything that user wants, along with there bing strength in numbers';
        stats.src = 'StandStatsImgs/HarvestStats.png';
        image.src = 'StandImgs/Harvest.png'
        link.href = 'https://jojowiki.com/Harvest';

    } else if (randomNumber === 48){
        name.textContent = 'Atom Heart Father';
        info.textContent = 'Atom Heart Father can live within a picture, and can attack anyone or anything that is within the photo that the Stand is currently in.';
        stats.src = 'StandStatsImgs/AtomHeartFatherStats.png';
        image.src = 'StandImgs/AtomHeartFather.png'
        link.href = 'https://jojowiki.com/Atom_Heart_Father';

    } else if (randomNumber === 49){
        name.textContent = 'Boy II Man';
        info.textContent = "Boy II Man can take someone else's Stand by winning five rounds of Rock-Paper-Scissors against them.";
        stats.src = 'StandStatsImgs/BoyIIManStats.png';
        image.src = 'StandImgs/BoyIIMan.png'
        link.href = 'https://jojowiki.com/Boy_II_Man';

    } else if (randomNumber === 50){
        name.textContent = 'Highway Star';
        info.textContent = "Highway Star can catch someone's scent, and never stop chasing them to get their nutrients to heal the user";
        stats.src = 'StandStatsImgs/HighwayStarStats.png';
        image.src = 'StandImgs/HighwayStar.png'
        link.href = 'https://jojowiki.com/Highway_Star';

    } else if (randomNumber === 51){
        name.textContent = 'Super Fly';
        info.textContent = 'Super Fly is a Stand that stands alone, if someone goes in, they are stuck in Super Fly until someone else enters. All damage done to Super Fly will be reflected back';
        stats.src = 'StandStatsImgs/SuperFlyStats.png';
        image.src = 'StandImgs/SuperFly.png'
        link.href = 'https://jojowiki.com/Super_Fly';

    } else if (randomNumber === 52){
        name.textContent = 'Enigma';
        info.textContent = "Enigma can turn into paper, and if the user can decide what a victim's fear habit is, Enigma can turn into that victim into a piece of paper";
        stats.src = 'StandStatsImgs/EnigmaStats.png';
        image.src = 'StandImgs/Enigma.png'
        link.href = 'https://jojowiki.com/Enigma';

    } else if (randomNumber === 53){
        name.textContent = 'Cheap Trick';
        info.textContent = "Cheap Trick stays on someone's back, and if someone looks at that person's back, that victim will die. The Stand will transfer to the person who last saw Cheap Trick.";
        stats.src = 'StandStatsImgs/CheapTrickStats.png';
        image.src = 'StandImgs/CheapTrick.png'
        link.href = 'https://jojowiki.com/Cheap_Trick';

    } else if (randomNumber === 54){
        name.textContent = 'Pearl Jam';
        info.textContent = 'Pearl Jam can be put into food, and when someone eats it, one of their problems will be fixed.';
        stats.src = 'StandStatsImgs/PearlJamStats.png';
        image.src = 'StandImgs/PearlJam.png'
        link.href = 'https://jojowiki.com/Pearl_Jam';

    } else if (randomNumber === 55){
        name.textContent = 'Earth, Wind, and Fire';
        info.textContent = 'Earth, Wind, and Fire allows the user to transform into anything that is simple';
        stats.src = 'StandStatsImgs/EarthWindAndFireStats.png';
        image.src = 'StandImgs/EarthWindAndFire.png'
        link.href = 'https://jojowiki.com/Earth_Wind_and_Fire';

    } else if (randomNumber === 56){
        name.textContent = 'Cinderella';
        info.textContent = 'Cinderella allows the user to replace body parts, allowing them to find true love(or other rules that the user wants to give)';
        stats.src = 'StandStatsImgs/CinderellaStats.png';
        image.src = 'StandImgs/Cinderella.png'
        link.href = 'https://jojowiki.com/Cinderella';

    } else if (randomNumber === 57){
        name.textContent = 'Stray Cat';
        info.textContent = 'Stray Cat allows the user to reincarnate as a plant. The user can then shoot air bubbles and manipulate the air around them';
        stats.src = 'StandStatsImgs/StrayCatStats.png';
        image.src = 'StandImgs/StrayCat.png'
        link.href = 'https://jojowiki.com/Stray_Cat';

    } else if (randomNumber === 58){
        name.textContent = 'Gold Experience';
        info.textContent = 'Gold Experience can bring anything to life, and anyone tries to attack what it has brought to life, it will reflect that damage. It can also heal and has enhanced senescence';
        stats.src = 'StandStatsImgs/GoldExperienceStats.png';
        image.src = 'StandImgs/GoldExperience.png'
        link.href = 'https://jojowiki.com/Gold_Experience';

    } else if (randomNumber === 59){
        name.textContent = 'Gold Experience Requiem';
        info.textContent = 'Gold Experience Requiem makes any other Stand powers null and undoes whatever powers they might be using.';
        stats.src = 'StandStatsImgs/GoldExperienceRequiemStats.png';
        image.src = 'StandImgs/GoldExperienceRequiem.png'
        link.href = 'https://jojowiki.com/Gold_Experience_Requiem';

    } else if (randomNumber === 60){
        name.textContent = 'Sticky Fingers';
        info.textContent = 'Sticky Fingers can turn anything it touches into a zipper that the Stand can open and close on command';
        stats.src = 'StandStatsImgs/StickyFingersStats.png';
        image.src = 'StandImgs/StickyFingers.png'
        link.href = 'https://jojowiki.com/Sticky_Fingers';

    } else if (randomNumber === 61){
        name.textContent = 'Moody Blues';
        info.textContent = 'Moody Blues can replay what people have done and be able to face-forward or stop the replays';
        stats.src = 'StandStatsImgs/MoodyBluesStats.png';
        image.src = 'StandImgs/MoodyBlues.png'
        link.href = 'https://jojowiki.com/Moody_Blues';

    } else if (randomNumber === 62){
        name.textContent = 'Sex Pistols';
        info.textContent = 'Sex Pistols can kick bullets into different directions or make the bullets more powerful';
        stats.src = 'StandStatsImgs/SexPistolsStats.png';
        image.src = 'StandImgs/SexPistols.png'
        link.href = 'https://jojowiki.com/Sex_Pistols';

    } else if (randomNumber === 63){
        name.textContent = 'Aerosmith';
        info.textContent = 'Aerosmith can shoot bullets and drop bombs, while being able to track carbon dioxide';
        stats.src = 'StandStatsImgs/AerosmithStats.png';
        image.src = 'StandImgs/Aerosmith.png'
        link.href = 'https://jojowiki.com/Aerosmith';

    } else if (randomNumber === 64){
        name.textContent = 'Purple Haze';
        info.textContent = 'Purple Haze releases a killer virus infection whenever it punches';
        stats.src = 'StandStatsImgs/PurpleHazeStats.png';
        image.src = 'StandImgs/PurpleHaze.png'
        link.href = 'https://jojowiki.com/Purple_Haze';

    } else if (randomNumber === 65){
        name.textContent = 'Spice Girl';
        info.textContent = 'Spice Girl can make anything it touches soft, and it makes it unbreakable';
        stats.src = 'StandStatsImgs/SpiceGirlStats.png';
        image.src = 'StandImgs/SpiceGirl.png'
        link.href = 'https://jojowiki.com/Spice_Girl';

    } else if (randomNumber === 66){
        name.textContent = 'Mr. President';
        info.textContent = 'Mr. President is a key that creates a hidden room for others to go into';
        stats.src = 'StandStatsImgs/MrPresidentStats.png';
        image.src = 'StandImgs/MrPresident.png'
        link.href = 'https://jojowiki.com/Mr.President';

    } else if (randomNumber === 67){
        name.textContent = 'King Crimson';
        info.textContent = 'King Crimson can create skips in time where the user of King Crimson is the only one who knows what happened during the skips. King Crimson also gives the user the power to see the near future.';
        stats.src = 'StandStatsImgs/KingCrimsonStats.png';
        image.src = 'StandImgs/KingCrimson.png'
        link.href = 'https://jojowiki.com/King_Crimson';

    } else if (randomNumber === 68){
        name.textContent = 'Black Sabbath';
        info.textContent = 'Black Sabbath can only be in shadows and will pursue all enemies from within the shadows. And will try and attack the enemy with a Stand arrow.';
        stats.src = 'StandStatsImgs/BlackSabbathStats.png';
        image.src = 'StandImgs/BlackSabbath.png'
        link.href = 'https://jojowiki.com/Black_Sabbath';

    } else if (randomNumber === 69){
        name.textContent = 'Soft Machine';
        info.textContent = 'Soft Machine can deflate anything like a balloon with a sharp knife';
        stats.src = 'StandStatsImgs/SoftMachineStats.png';
        image.src = 'StandImgs/SoftMachine.png'
        link.href = 'https://jojowiki.com/Soft_Machine';

    } else if (randomNumber === 70){
        name.textContent = 'Kraft Work';
        info.textContent = 'Kraft Work can lock the position of any object, and build up kinetic energy while it is locked in place.';
        stats.src = 'StandStatsImgs/KraftWorkStats.png';
        image.src = 'StandImgs/KraftWork.png'
        link.href = 'https://jojowiki.com/Kraft_Work';

    } else if (randomNumber === 71){
        name.textContent = 'Metallica';
        info.textContent = "Metallica can manipulate Iron, it is mainly used to change the Iron from inside someone's body";
        stats.src = 'StandStatsImgs/MetallicaStats.png';
        image.src = 'StandImgs/Metallica.png'
        link.href = 'https://jojowiki.com/Metallica';

    } else if (randomNumber === 72){
        name.textContent = 'Little Feet';
        info.textContent = 'Little Feet is able to shrink anything it attacks, along with being able to shrink down the user.';
        stats.src = 'StandStatsImgs/LittleFeetStats.png';
        image.src = 'StandImgs/LittleFeet.png'
        link.href = 'https://jojowiki.com/Little_Feet';

    } else if (randomNumber === 73){
        name.textContent = 'Man in the Mirror';
        info.textContent = 'Man in the Mirror allows the user to be in the mirror world, and take in or out whatever the user wants';
        stats.src = 'StandStatsImgs/ManInTheMirrorStats.png';
        image.src = 'StandImgs/ManInTheMirror.png'
        link.href = 'https://jojowiki.com/Man_in_the_Mirror';

    } else if (randomNumber === 74){
        name.textContent = 'Beach Boy';
        info.textContent = 'Beach Boy has a line that can go through anything an will never come out of a target, along with having damage reflection.';
        stats.src = 'StandStatsImgs/BeachBoyStats.png';
        image.src = 'StandImgs/BeachBoy.png'
        link.href = 'https://jojowiki.com/Beach_Boy';

    } else if (randomNumber === 75){
        name.textContent = 'The Grateful Dead';
        info.textContent = 'The Grateful Dead accelerates the age of everyone nearby, the only way to fight against it is ice or something very cold.';
        stats.src = 'StandStatsImgs/TheGratefulDeadStats.png';
        image.src = 'StandImgs/TheGratefulDead.png'
        link.href = 'https://jojowiki.com/The_Grateful_Dead';

    } else if (randomNumber === 76){
        name.textContent = 'Babyface';
        info.textContent = 'Babyface is made through a Homunculus generation, and after it is born, the user must teach it. Babyface can manipulate matter, breaking itself and other things apart into cubes';
        stats.src = 'StandStatsImgs/BabyFaceStats.png';
        image.src = 'StandImgs/BabyFace.png'
        link.href = 'https://jojowiki.com/Baby_Face';

    } else if (randomNumber === 77){
        name.textContent = 'White Album';
        info.textContent = 'White Album can freeze anything that it touches, and can create ice armour around the user.';
        stats.src = 'StandStatsImgs/WhiteAlbumStats.png';
        image.src = 'StandImgs/WhiteAlbum.png'
        link.href = 'https://jojowiki.com/White_Album';

    } else if (randomNumber === 78){
        name.textContent = 'Clash';
        info.textContent = 'Clash can warp to any other liquid nearby, and transform its size based on the size of the liquid. It can use its sharp fangs to attack anyone nearby.';
        stats.src = 'StandStatsImgs/ClashStats.png';
        image.src = 'StandImgs/Clash.png'
        link.href = 'https://jojowiki.com/Clash';

    } else if (randomNumber === 80){
        name.textContent = 'Talking Head';
        info.textContent = 'Talking Head forces whoever the victim is to lie, and will do anything to ensure that they are not telling the truth.';
        stats.src = 'StandStatsImgs/TalkingHeadStats.png';
        image.src = 'StandImgs/TalkingHead.png'
        link.href = 'https://jojowiki.com/Talking_Head';

    } else if (randomNumber === 79){
        name.textContent = 'Notorious B.I.G';
        info.textContent = 'Notorious B.I.G will only activate when the user dies, making the Stand almost unstoppable to defeat. It will chase down the fastest object that is nearby, and slowly get larger and larger.';
        stats.src = 'StandStatsImgs/NotoriousBIGStats.png';
        image.src = 'StandImgs/NotoriousBIG.png'
        link.href = 'https://jojowiki.com/Notorious_B.I.G';

    } else if (randomNumber === 81){
        name.textContent = 'Green Day';
        info.textContent = 'Green Day can infest anyone with mold whenever they go down from their current position.';
        stats.src = 'StandStatsImgs/GreenDayStats.png';
        image.src = 'StandImgs/GreenDay.png'
        link.href = 'https://jojowiki.com/Green_Day';

    } else if (randomNumber === 82){
        name.textContent = 'Oasis';
        info.textContent = 'Oasis allows the user to liquify the ground around them, allowing them to swim in the ground them.';
        stats.src = 'StandStatsImgs/OasisStats.png';
        image.src = 'StandImgs/Oasis.png'
        link.href = 'https://jojowiki.com/Oasis';

    } else if (randomNumber === 83){
        name.textContent = 'Chariot Requiem';
        info.textContent = 'Chariot Requiem swaps the minds of everyone around it whenever it is summoned. Whenever someone tries to attack it, their Stand will turn on them to protect Chariot Requiem. The only way to defeat it is to destory the sun behind their heads to get rid of the shadow that is Chariot Requiem.';
        stats.src = 'StandStatsImgs/ChariotRequiemStats.png';
        image.src = 'StandImgs/ChariotRequiem.png'
        link.href = 'https://jojowiki.com/Chariot_Requiem';

    } else if (randomNumber === 84){
        name.textContent = 'Rolling Stones';
        info.textContent = 'Rolling Stones is a stone that creates a version of someone who will die, and hone in on that target, convicing the target to die with Rolling Stones';
        stats.src = 'StandStatsImgs/RollingStonesStats.png';
        image.src = 'StandImgs/RollingStones.png'
        link.href = 'https://jojowiki.com/Rolling_Stones';

    } else if (randomNumber === 85){
        name.textContent = 'Stone Free';
        info.textContent = "Stone Free is very strong(similar to Star Platinum), with the ability to turn the user's body into string and it has the ability to be manipulated."
        stats.src = 'StandStatsImgs/StoneFreeStats.png';
        image.src = 'StandImgs/StoneFree.png'
        link.href = 'https://jojowiki.com/Stone_Free';

    } else if (randomNumber === 86){
        name.textContent = 'Burning Down the House';
        info.textContent = "Burning Down the House allows the user to access a ghost room and use anything inside(some things in the room can't be used the same way).";
        stats.src = 'StandStatsImgs/BurningDownTheHouseStats.png';
        image.src = 'StandImgs/BurningDownTheHouse.png'
        link.href = 'https://jojowiki.com/Burning_Down_the_House';

    } else if (randomNumber === 87){
        name.textContent = 'Kiss';
        info.textContent = 'Kiss can create stickers, and when they are put the stickers on anything to make a copy of it, when the sticker is taken off the copy will go back to the original.';
        stats.src = 'StandStatsImgs/KissStats.png';
        image.src = 'StandImgs/Kiss.png'
        link.href = 'https://jojowiki.com/Kiss';

    } else if (randomNumber === 88){
        name.textContent = 'Foo Fighters';
        info.textContent = 'Foo Fighters is a colony of plankton that can grow more plankton whenever they have access to water, along with having power to invade bodies.';
        stats.src = 'StandStatsImgs/FooFightersStats.png';
        image.src = 'StandImgs/FooFighters.png'
        link.href = 'https://jojowiki.com/Foo_Fighters_(Stand)';

    } else if (randomNumber === 89){
        name.textContent = 'Weather Report';
        info.textContent = 'Weather Report can control the weather in any way the user wants. Heavy Weather gains the ability to create rainbows that can turn people into snails.';
        stats.src = 'StandStatsImgs/WeatherReportStats.png';
        image.src = 'StandImgs/WeatherReport.png'
        link.href = 'https://jojowiki.com/Weather_Report_(Stand)';

    } else if (randomNumber === 90){
        name.textContent = 'Diver Down';
        info.textContent = 'Diver Down can store power in objects, and can go into solid objects and restructure the objects from the inside.';
        stats.src = 'StandStatsImgs/DiverDownStats.png';
        image.src = 'StandImgs/DiverDown.png'
        link.href = 'https://jojowiki.com/Diver_Down';

    } else if (randomNumber === 91){
        name.textContent = 'Whitesnake';
        info.textContent = "Whitesnake is able to turn someone's Stand and memories into a disc that can be put into anyone else. It can also create hallucinations and soul melting while poeple are asleep.";
        stats.src = 'StandStatsImgs/WhiteSnakeStats.png';
        image.src = 'StandImgs/WhiteSnake.png'
        link.href = 'https://jojowiki.com/Whitesnake';

    } else if (randomNumber === 92){
        name.textContent = 'C-Moon';
        info.textContent = 'C-Moon makes the user the center of the world and shift gravity wherever they are standing. Along with inverting surfaces on anything that C-Moon attacks.';
        stats.src = 'StandStatsImgs/CMoonStats.png';
        image.src = 'StandImgs/CMoon.png'
        link.href = 'https://jojowiki.com/C-MOON';

    } else if (randomNumber === 93){
        name.textContent = 'Made in Heaven';
        info.textContent = 'Made in Heaven can accelerate time, and the user goes as fast as time is accelerating, and it can go as fast as the user wishes.';
        stats.src = 'StandStatsImgs/MadeInHeavenStats.png';
        image.src = 'StandImgs/MadeInHeaven.png'
        link.href = 'https://jojowiki.com/Made_in_Heaven';

    } else if (randomNumber === 94){
        name.textContent = 'Goo Goo Dolls';
        info.textContent = 'Goo Goo Dolls can shrink anyone down to a very small size, it will only work when the victim is nearby.';
        stats.src = 'StandStatsImgs/GooGooDollsStats.png';
        image.src = 'StandImgs/GooGooDolls.png'
        link.href = 'https://jojowiki.com/Goo_Goo_Dolls';

    } else if (randomNumber === 95){
        name.textContent = 'Manhattan Transfer';
        info.textContent = 'Manhattan Transfer can read the wind nearby it, it is used best for sniping because it is able to redirect bullets.';
        stats.src = 'StandStatsImgs/ManhattanTransferStats.png';
        image.src = 'StandImgs/ManhattanTransfer.png'
        link.href = 'https://jojowiki.com/Manhattan_Transfer';

    } else if (randomNumber === 96){
        name.textContent = 'Highway to Hell';
        info.textContent = 'Highway to Hell will reflect all damage done to the user to someone else nearby, it will do anything to ensure that the victim gets the same attacks done to them.';
        stats.src = 'StandStatsImgs/HighwayToHellStats.png';
        image.src = 'StandImgs/HighwayToHell.png'
        link.href = 'https://jojowiki.com/Highway_to_Hell';

    } else if (randomNumber === 97){
        name.textContent = 'Marilyn Manson';
        info.textContent = 'Marilyn Manson can collect the debts of anyone that loses a bet, and will collect anything of value from the victim, but will pay the victim if they win the game without cheating.';
        stats.src = 'StandStatsImgs/MarilynMansonStats.png';
        image.src = 'StandImgs/MarilynManson.png'
        link.href = 'https://jojowiki.com/Marilyn_Manson';

    } else if (randomNumber === 98){
        name.textContent = "Jumpin' Jack Flash";
        info.textContent = "Jumpin' Jack Flash allows the user to remove gravity on anything they touch, along with having a centrifugal force attack built into the Stand.";
        stats.src = 'StandStatsImgs/JumpinJackFlashStats.png';
        image.src = 'StandImgs/JumpinJackFlash.png'
        link.href = 'https://jojowiki.com/Jumpin%27_Jack_Flash';

    } else if (randomNumber === 99){
        name.textContent = 'Limp Bizkit';
        info.textContent = "Limp Bizkit can reanimate invisible zombies that are under the user's command, along with the user being able to come back to life as an invisble zombie themseleves.";
        stats.src = 'StandStatsImgs/LimpBizkitStats.png';
        image.src = 'StandImgs/LimpBizkit.png'
        link.href = 'https://jojowiki.com/Limp_Bizkit';

    } else if (randomNumber === 100){
        name.textContent = 'Survivor';
        info.textContent = 'Survivor drops the Stand in water and sends electrical currents to cause aggression in all others around the user, forcing them to fight each other.';
        stats.src = 'StandStatsImgs/SurvivorStats.png';
        image.src = 'StandImgs/Survivor.png'
        link.href = 'https://jojowiki.com/Survivor';

    } else if (randomNumber === 101){
        name.textContent = 'Planet Waves';
        info.textContent = 'Planet Waves can attract meteorites wherever the user is standing, it will burn up before hitting the user to ensure they do not get hurt by their own attack.';
        stats.src = 'StandStatsImgs/PlanetWavesStats.png';
        image.src = 'StandImgs/PlanetWaves.png'
        link.href = 'https://jojowiki.com/Planet_Waves';

    } else if (randomNumber === 102){
        name.textContent = "Dragon's Dream";
        info.textContent = "Dragon's Dream gives the user the right place to stand for Feng Shui martial arts to be protected by everything that will happen, while the victim will get bad luck and get hurt because they are not standing in the right spot. The only way for this Stand to lose is through a tie.";
        stats.src = 'StandStatsImgs/DragonsDreamStats.png';
        image.src = 'StandImgs/DragonsDream.png'
        link.href = 'https://jojowiki.com/Dragon%27s_Dream';

    } else if (randomNumber === 103){
        name.textContent = 'Yo-Yo Ma';
        info.textContent = 'Yo-Yo Ma pretends to be helpful to victims, and while their backs are turned, it will kill them will its acidic saliva.';
        stats.src = 'StandStatsImgs/YoYoMaStats.png';
        image.src = 'StandImgs/YoYoMa.png'
        link.href = 'https://jojowiki.com/Yo-Yo_Ma';

    } else if (randomNumber === 104){
        name.textContent = 'Green, Green Grass of Home';
        info.textContent = 'Green, Green Grass of Home gradually shrinks down anyone the closer they get to the user.';
        stats.src = 'StandStatsImgs/GreenGreenGrassOfHomeStats.png';
        image.src = 'StandImgs/GreenGreenGrassOfHome.png'
        link.href = 'https://jojowiki.com/Green,_Green_Grass_of_Home';

    } else if (randomNumber === 105){
        name.textContent = 'Jail House Lock';
        info.textContent = 'Jail House Lock can infect a victim, and whenever they are infected, they can only remember three things before they forgot what they just learned once again.';
        stats.src = 'StandStatsImgs/JailHouseLockStats.png';
        image.src = 'StandImgs/JailHouseLock.png'
        link.href = 'https://jojowiki.com/Jail_House_Lock';

    } else if (randomNumber === 106){
        name.textContent = 'Bohemian Rhapsody';
        info.textContent = 'Bohemian Rhaposody can bring all images(stories and paintings) to life, and if someone loved that image as a child, they will be brought into the story and become part of it.';
        stats.src = 'StandStatsImgs/BohemianRhapsodyStats.png';
        image.src = 'StandImgs/BohemianRhapsody.png';
        link.href = 'https://jojowiki.com/Bohemian_Rhapsody';

    } else if (randomNumber === 107){
        name.textContent = 'Sky High';
        info.textContent = "Sky High can control very fast flying creatures called Rods, and they will attack a victim's heat";
        stats.src = 'StandStatsImgs/SkyHighStats.png';
        image.src = 'StandImgs/SkyHigh.png'
        link.href = 'https://jojowiki.com/Sky_High';

    } else if (randomNumber === 108){
        name.textContent = 'Under World';
        info.textContent = 'Under World can dig in the ground and find memories of things that have happened in the past nearby, and some of the memories can be used to attack or trap someone';
        stats.src = 'StandStatsImgs/UnderWorldStats.png';
        image.src = 'StandImgs/UnderWorld.png'
        link.href = 'https://jojowiki.com/Under_World';

    } else if (randomNumber === 109){
        name.textContent = 'Tusk Act 1';
        info.textContent = 'Tusk Act 1 gives the user the power to shoot out their fingernails like bullets';
        stats.src = 'StandStatsImgs/TuskAct1Stats.png';
        image.src = 'StandImgs/TuskAct1.png'
        link.href = 'https://jojowiki.com/Tusk';

    } else if (randomNumber === 110){
        name.textContent = 'Tusk Act 2';
        info.textContent = "Tusk Act 2 can shoot out the user's fingernails like bullets, while also creating holes in reality that will go after enemies.";
        stats.src = 'StandStatsImgs/TuskAct2Stats.png';
        image.src = 'StandImgs/TuskAct2.png'
        link.href = 'https://jojowiki.com/Tusk';

    } else if (randomNumber === 111){
        name.textContent = 'Tusk Act 3';
        info.textContent = 'Tusk Act 3 has all of the powers of Tusk Act 1 and 2, while being able to bring the User through the wormholes it creates like a portal to another wormhole it creates';
        stats.src = 'StandStatsImgs/TuskAct3Stats.png';
        image.src = 'StandImgs/TuskAct3.png'
        link.href = 'https://jojowiki.com/Tusk';

    } else if (randomNumber === 112){
        name.textContent = 'Tusk Act 4';
        info.textContent = 'Tusk Act 4 has all of the powers of the other Tusk Stands, while also having the Infinite Rotation';
        stats.src = 'StandStatsImgs/TuskAct4Stats.png';
        image.src = 'StandImgs/TuskAct4.png'
        link.href = 'https://jojowiki.com/Tusk';

    } else if (randomNumber === 113){
        name.textContent = 'Ball Breaker';
        info.textContent = 'Ball Breaker has the power of the Golden Spin, that is so powerful that it can slip through dimensional walls.';
        stats.src = 'StandStatsImgs/BallBreakerStats.png';
        image.src = 'StandImgs/BallBreaker.png'
        link.href = 'https://jojowiki.com/Ball_Breaker';

    } else if (randomNumber === 114){
        name.textContent = 'Ticket to Ride';
        info.textContent = 'Ticket to Ride allows the user to create tear cutters, along with having divine protection.';
        stats.src = 'StandStatsImgs/TicketToRideStats.png';
        image.src = 'StandImgs/TicketToRide.png'
        link.href = 'https://jojowiki.com/Ticket_to_Ride';

    } else if (randomNumber === 115){
        name.textContent = 'Scary Monsters';
        info.textContent = 'Scary Monsters allows the user to turn any animal into a dinosaur that is under their command, while being bale to become a dinosaur themseleves.';
        stats.src = 'StandStatsImgs/ScaryMonstersStats.png';
        image.src = 'StandImgs/ScaryMonsters.png'
        link.href = 'https://jojowiki.com/Scary_Monsters';

    } else if (randomNumber === 116){
        name.textContent = 'Cream Starter';
        info.textContent = 'Cream Starter is a spray that can add flesh, or can heal wounds by covering them(among other things)';
        stats.src = 'StandStatsImgs/CreamStarterStats.png';
        image.src = 'StandImgs/CreamStarter.png'
        link.href = 'https://jojowiki.com/Cream_Starter';

    } else if (randomNumber === 117){
        name.textContent = 'Dirty Deeds Done Dirt Cheap';
        info.textContent = 'D4C gives the user the ability to travel between dimensions whenever they are pushed between two objects. It also has the unbreakable dimensional wall, D4C Love Train.';
        stats.src = 'StandStatsImgs/D4CStats.png';
        image.src = 'StandImgs/D4C.png'
        link.href = 'https://jojowiki.com/Dirty_Deeds_Done_Dirt_Cheap';

    } else if (randomNumber === 118){
        name.textContent = 'In a Silent Way';
        info.textContent = 'In a Silent Way can store sounds and create 3D sound constructs, along with making sound homunculi';
        stats.src = 'StandStatsImgs/InASilentWayStats.png';
        image.src = 'StandImgs/InASilentWay.png'
        link.href = 'https://jojowiki.com/In_a_Silent_Way';

    } else if (randomNumber === 119){
        name.textContent = 'Tomb of the Boom 1 2 3';
        info.textContent = 'Tomb of the Boom has the power of magnetism of wherever the other two(You have one of three of the same Stands), along with being able to manipulate iron';
        stats.src = 'StandStatsImgs/TombOfTheBoomStats.png';
        image.src = 'StandImgs/TombOfTheBoom.png'
        link.href = 'https://jojowiki.com/Tomb_of_the_Boom_1_2_3';

    } else if (randomNumber === 120){
        name.textContent = 'Listen to my Rhythm';
        info.textContent = 'Listen to my Rhythm or its real name Boku no Rhythm wo Kiitekure, can put bombs on anything the user touches, and whenever someone pulls out the pin the bomb goes off.';
        stats.src = 'StandStatsImgs/ListenToMyRhythmStats.png';
        image.src = 'StandImgs/ListenToMyRhythm.png' 
        link.href = 'https://jojowiki.com/Boku_no_Rhythm_wo_Kiitekure';

    } else if (randomNumber === 121){
        name.textContent = 'Wired';
        info.textContent = 'Wired can make a portal in the sky whenever the user has water(we see the user using a plate of water for his portal), and the user can open their mounth and let hooks out to put through the portal.';
        stats.src = 'StandStatsImgs/WiredStats.png';
        image.src = 'StandImgs/Wired.png'
        link.href = 'https://jojowiki.com/Wired';

    } else if (randomNumber === 122){
        name.textContent = 'Mandom';
        info.textContent = 'Mandom can turn back time six seconds whenever the user turns their watch back.';
        stats.src = 'StandStatsImgs/MandomStats.png';
        image.src = 'StandImgs/Mandom.png'
        link.href = 'https://jojowiki.com/Mandom';

    } else if (randomNumber === 123){
        name.textContent = 'Catch the Rainbow';
        info.textContent = 'Catch the Rainbow can manipulate rain, mainly by immobilizing it in the air to allow the user to walk on the rain in the air, and the rain also goes through the user and make holes, making them manipulate their body with the rain.';
        stats.src = 'StandStatsImgs/CatchTheRainbowStats.png';
        image.src = 'StandImgs/CatchTheRainbow.png'
        link.href = 'https://jojowiki.com/Catch_the_Rainbow';

    } else if (randomNumber === 124){
        name.textContent = 'Sugar Mountain';
        info.textContent = 'Sugar Mountain makes the user its guardian, and whenever someone loses something in the woods, the person who lost it is offered the same thing or something even better. If that person tells the truth, they will get both, if they lie, the tree kills them. They have until the end of the day to use all of the items they get, or they become part of the tree.';
        stats.src = 'StandStatsImgs/SugarMountainStats.png';
        image.src = 'StandImgs/SugarMountain.png'
        link.href = 'https://jojowiki.com/Sugar_Mountain_(Stand)';

    } else if (randomNumber === 125){
        name.textContent = 'Tatoo You!';
        info.textContent = 'Tatoo You allows the many users to go into the tattoos of the other users';
        stats.src = 'StandStatsImgs/TatooYouStats.png';
        image.src = 'StandImgs/TatooYou.png'
        link.href = 'https://jojowiki.com/TATOO_YOU!';

    } else if (randomNumber === 126){
        name.textContent = 'Tubular Bells';
        info.textContent = 'Tubular Bells allows the user to blow up metal parts like balloons, and when they do they can balloon animals that can follow simple commands, and whenever they attack they revert to their original form';
        stats.src = 'StandStatsImgs/TubularBellsStats.png';
        image.src = 'StandImgs/TubularBells.png'
        link.href = 'https://jojowiki.com/Tubular_Bells';

    } else if (randomNumber === 127){
        name.textContent = '20th Century Boy';
        info.textContent = '20th Century Boy works whenever they user takes the defensive stance, and when they do nothing in this world can hurt them, but they can not move or do anything while they are protected.';
        stats.src = 'StandStatsImgs/20thCenturyBoyStats.png';
        image.src = 'StandImgs/20thCenturyBoy.png';
        link.href = 'https://jojowiki.com/20th_Century_BOY';

    } else if (randomNumber === 128){
        name.textContent = 'Civil War';
        info.textContent = "Civil War can create someone's guilt, and if the object of guilt attaches itself to the victim, they will be ensnared by a membrane. If someone kills the user and feels guily about it, the user will come back to life, and their guilt will go to the one who killed them.";
        stats.src = 'StandStatsImgs/CivilWarStats.png';
        image.src = 'StandImgs/CivilWar.png';
        link.href = 'https://jojowiki.com/Civil_War';

    } else if (randomNumber === 129){
        name.textContent = 'Chocolate Disco';
        info.textContent = "Chocolate Disco makes a grid in front of the user, where it can change the position of anything inside of the grid with the device on the user's arm";
        stats.src = 'StandStatsImgs/ChocolateDiscoStats.png';
        image.src = 'StandImgs/ChocolateDisco.png';
        link.href = 'https://jojowiki.com/Chocolate_Disco';

    } else if (randomNumber === 130){
        name.textContent = 'Oh! Lonesome Me';
        info.textContent = "Oh! Lonesome Me can transfer the user's body parts to a peice of rope.";
        stats.src = 'StandStatsImgs/OhLonesomeMeStats.png';
        image.src = 'StandImgs/OhLonesomeMe.png';
        link.href = 'https://jojowiki.com/Oh!_Lonesome_Me';

    } else if (randomNumber === 131){
        name.textContent = 'Hey Ya!';
        info.textContent = "Hey Ya is always on the user's back, and will give the user positive reinforcement.";
        stats.src = 'StandStatsImgs/HeyYaStats.png';
        image.src = 'StandImgs/HeyYa.png';
        link.href = 'https://jojowiki.com/Hey_Ya!';

    } else if (randomNumber === 132){
        name.textContent = 'Soft & Wet';
        info.textContent = 'Soft & Wet can create bubbles, and whatever or whoever it hits, it will take something away from it. It also has the ultimate ability of Go Beyond, to be able to defy all logic.';
        stats.src = 'StandStatsImgs/Soft&WetStats.png';
        image.src = 'StandImgs/Soft&Wet.png';
        link.href = 'https://jojowiki.com/Soft_%26_Wet';

    } else if (randomNumber === 133){
        name.textContent = 'Paisley Park';
        info.textContent = 'Paisley Park can help guide anyone through their phone and find any information through the internet, while also being able to manipulate electronics.';
        stats.src = 'StandStatsImgs/PaisleyParkStats.png';
        image.src = 'StandImgs/PaisleyPark.png';
        link.href = 'https://jojowiki.com/Paisley_Park';

    } else if (randomNumber === 134){
        name.textContent = 'King Nothing';
        info.textContent = 'King Nothing can track any scent and go find the source of it.';
        stats.src = 'StandStatsImgs/KingNothingStats.png';
        image.src = 'StandImgs/KingNothing.png';
        link.href = 'https://jojowiki.com/King_Nothing';

    } else if (randomNumber === 135){
        name.textContent = 'Doggy Style';
        info.textContent = "Doggy Style can peel the skin of the user and give it similar power to Stone Free's string";
        stats.src = 'StandStatsImgs/DoggyStyleStats.png';
        image.src = 'StandImgs/DoggyStyle.png';
        link.href = 'https://jojowiki.com/Doggy_Style';

    } else if (randomNumber === 136){
        name.textContent = 'Paper Moon King';
        info.textContent = "Paper Moon King can allow the user to turn anything into origami, and if someone touches it, it will manipulate the victim's senses to make all of one object look the exact same.";
        stats.src = 'StandStatsImgs/PaperMoonKingStats.png';
        image.src = 'StandImgs/PaperMoonKing.png'
        link.href = 'https://jojowiki.com/Paper_Moon_King';

    } else if (randomNumber === 137){
        name.textContent = 'California King Bed';
        info.textContent = 'California King Bed can set a rule, if that rule is broken a memory is taken from the victim and turns the memory into a chess peice, the only way for the victim to get their memories back, the user of the Stand has to step in their shadow.';
        stats.src = 'StandStatsImgs/CaliforniaKingBedStats.png';
        image.src = 'StandImgs/CaliforniaKingBed.png'
        link.href = 'https://jojowiki.com/California_King_Bed';

    } else if (randomNumber === 138){
        name.textContent = 'Walking Heart';
        info.textContent = "Walking Heart can extend the heel spikes of the user's heels, also making them very sharp.";
        stats.src = 'StandStatsImgs/WalkingHeartStats.png';
        image.src = 'StandImgs/WalkingHeart.png'
        link.href = 'https://jojowiki.com/Walking_Heart';

    } else if (randomNumber === 139){
        name.textContent = 'Speed King';
        info.textContent = 'Speed King can accumulate heat anywhere it touches, getting to around 300 degrees celcius.';
        stats.src = 'StandStatsImgs/SpeedKingStats.png';
        image.src = 'StandImgs/SpeedKing.png'
        link.href = 'https://jojowiki.com/Speed_King';

    } else if (randomNumber === 140){
        name.textContent = 'Awaking III Leaves';
        info.textContent = 'Awaking III Leaves can create arrows, and wherever they are placed, it will manipulate a vector and push in the direction that the Stand arrows are facing.';
        stats.src = 'StandStatsImgs/AwakingIIILeavesStats.png';
        image.src = 'StandImgs/AwakingIIILeaves.png'
        link.href = 'https://jojowiki.com/Awaking_III_Leaves';

    } else if (randomNumber === 141){
        name.textContent = "Space Truckin'";
        info.textContent = "Space Truckin' has dimensional storage that can store anything within a deck of cards.";
        stats.src = 'StandStatsImgs/SpaceTruckinStats.png';
        image.src = 'StandImgs/SpaceTruckin.png'
        link.href = 'https://jojowiki.com/Space_Trucking';

    } else if (randomNumber === 142){
        name.textContent = 'Wonder of U';
        info.textContent = 'Wonder of U activates if someone pursues them in any way, if they do a random calamity will occur to stop them.';
        stats.src = 'StandStatsImgs/WonderOfUStats.png';
        image.src = 'StandImgs/WonderOfU.png'
        link.href = 'https://jojowiki.com/Wonder_of_U';

    } else if (randomNumber === 143){
        name.textContent = 'Fun Fun Fun';
        info.textContent = 'Fun Fun Fun can puppeteer anyone whenever the user is above them, and if they take even a little bit of damage, the will get a symbol there and can be controlled by the user';
        stats.src = 'StandStatsImgs/FunFunFunStats.png';
        image.src = 'StandImgs/FunFunFun.png'
        link.href = 'https://jojowiki.com/Fun_Fun_Fun';

    } else if (randomNumber === 144){
        name.textContent = 'Born this Way';
        info.textContent = 'Born this Way can choose a target and whenever they open anything, the Stand will jump out and create a very cold wind to try and defeat the victim.';
        stats.src = 'StandStatsImgs/BornThisWayStats.png';
        image.src = 'StandImgs/BornThisWay.png'
        link.href = 'https://jojowiki.com/Born_This_Way';

    } else if (randomNumber === 145){
        name.textContent = 'I am a Rock';
        info.textContent = 'I am a Rock activates whenever the user touches someone, and when it activates it can attract all of one object to a victim to attack them.';
        stats.src = 'StandStatsImgs/IAmARockStats.png';
        image.src = 'StandImgs/IAmARock.png'
        link.href = 'https://jojowiki.com/I_Am_a_Rock';

    } else if (randomNumber === 146){
        name.textContent = 'Doobie Wah!';
        info.textContent = 'Doobie Wah! chooses a target, and whenever that target exhales, the Stand will appear to attack them.';
        stats.src = 'StandStatsImgs/DoobieWahStats.png';
        image.src = 'StandImgs/DoobieWah.png'
        link.href = 'https://jojowiki.com/Doobie_Wah!';

    } else if (randomNumber === 147){
        name.textContent = 'Schott Key No. 1';
        info.textContent = "Schott Key No. 1 turns the right hand into whatever the user's left hand is holding";
        stats.src = 'StandStatsImgs/SchottKeyNo1Stats.png';
        image.src = 'StandImgs/SchottKeyNo1.png'
        link.href = 'https://jojowiki.com/Schott_Key_No.1';

    } else if (randomNumber === 148){
        name.textContent = 'Schott Key No 2';
        info.textContent = 'Schott Key No 2 hides inside of a soccerball bag, and the Stand releases a toxic gas.';
        stats.src = 'StandStatsImgs/SchottKeyNo2Stats.png';
        image.src = 'StandImgs/SchottKeyNo2.png'
        link.href = 'https://jojowiki.com/Schott_Key_No.2';

    } else if (randomNumber === 149){
        name.textContent = 'Vitamin C';
        info.textContent = "Vitamin C puts hands on all surfaces nearby, and whenever someone gets touched by one, it will soften their organic tissue.";
        stats.src = 'StandStatsImgs/VitaminCStats.png';
        image.src = 'StandImgs/VitaminC.png'
        link.href = 'https://jojowiki.com/Vitamin_C';

    } else if (randomNumber === 150){
        name.textContent = 'Blue Hawaii';
        info.textContent = "Blue Hawaii can possess someone's mind if they touch something that was part of the user. The infection can go from person to person, and the one who is infected can only go forward towards its target.";
        stats.src = 'StandStatsImgs/BlueHawaiiStats.png';
        image.src = 'StandImgs/BlueHawaii.png'
        link.href = 'https://jojowiki.com/Blue_Hawaii';

    } else if (randomNumber === 151){
        name.textContent = 'Brain Storm';
        info.textContent = "Brain Storm comes out of the the user's hands, and if it interacts with a victim, it gives them Hemolysis.";
        stats.src = 'StandStatsImgs/BrainStormStats.png';
        image.src = 'StandImgs/BrainStorm.png'
        link.href = 'https://jojowiki.com/Brain_Storm';

    } else if (randomNumber === 152){
        name.textContent = 'Ozon Baby';
        info.textContent = 'Ozon Baby stays dormant until it is burid in the ground, but when it is activated it will manipulate pressure in the area surrounding it.';
        stats.src = 'StandStatsImgs/OzonBabyStats.png';
        image.src = 'StandImgs/OzonBrain.png'
        link.href = 'https://jojowiki.com/Ozon_Baby';

    } else if (randomNumber === 153){
        name.textContent = 'Doctor Wu';
        info.textContent = 'Doctor Wu allows the user to turn into gravel, and if the user gets into someone, they can possess their bones.';
        stats.src = 'StandStatsImgs/DoctorWuStats.png';
        image.src = 'StandImgs/DoctorWu.png'
        link.href = 'https://jojowiki.com/Doctor_Wu#Story';

    } else if (randomNumber === 154){
        name.textContent = 'Love Love Deluxe';
        info.textContent = 'Love Love Deluxe can grow hair wherever someone has touched.';
        stats.src = 'StandStatsImgs/LoveLoveDeluxeStats.png';
        image.src = 'StandImgs/LoveLoveDeluxe.png'
        link.href = 'https://jojowiki.com/Love_Love_Deluxe';

    } else if (randomNumber === 155){
        name.textContent = 'Les Feuilles';
        info.textContent = 'Les Feuilles can transport someone if the Stand makes a path, and will do anything to help scam people for the street.';
        stats.src = 'StandStatsImgs/LesFeuillesStats.png';
        image.src = 'StandImgs/LesFeuilles.png'
        link.href = 'https://jojowiki.com/Les_Feuilles';

    } else if (randomNumber === 156){
        name.textContent = 'Milagroman';
        info.textContent = 'Milagroman is a curse whenever someone picks up a bill with a 13 on the serial number on it, and it will continue to give you money until you die.';
        stats.src = 'StandStatsImgs/MilagroManStats.png';
        image.src = 'StandImgs/MilagroMan.png'
        link.href = 'https://jojowiki.com/Milagroman';

    } else if (randomNumber === 157){
        name.textContent = 'November Rain';
        info.textContent = "November Rain brings rain down wherever the user's feet are, and can control how heavy the rain is.";
        stats.src = 'StandStatsImgs/NovemberRainStats.png';
        image.src = 'StandImgs/NovemberRain.png'
        link.href = 'https://jojowiki.com/November_Rain';

    } else if (randomNumber === 158){
        name.textContent = 'Smooth Operators';
        info.textContent = 'Smooth Operators can move anything, and then displace it.';
        stats.src = 'StandStatsImgs/SmoothOperatorsStats.png';
        image.src = 'StandImgs/SmoothOperators.png'
        link.href = 'https://jojowiki.com/Smooth_Operators';

    } else if (randomNumber === 159){
        name.textContent = 'The Hustle';
        info.textContent = "The Hustle can vibrate and manipulate the user's muscles.";
        stats.src = 'StandStatsImgs/TheHustleStats.png';
        image.src = 'StandImgs/TheHustle.png'
        link.href = 'https://jojowiki.com/The_Hustle';

    } else if (randomNumber === 160){
        name.textContent = 'The Mattekudasai';
        info.textContent = 'The Mattekudasai can make a copy of anything(along with changing something about the copy), but only when someone asks for that object.';
        stats.src = 'StandStatsImgs/TheMattekudasaiStats.png';
        image.src = 'StandImgs/TheMattekudasai.png'
        link.href = 'https://jojowiki.com/THE_MATTEKUDASAI';

    } else if (randomNumber === 161){
        name.textContent = 'Bigmouth Strikes Again';
        info.textContent = "Bigmouth Strikes Again allows the user's skin to disperse(similar to Doctor Wu), and it also allows the user to camouflage with anything nearby.";
        stats.src = 'StandStatsImgs/BigMouthStrikesAgainStats.png';
        image.src = 'StandImgs/BigMouthStrikesAgain.png'
        link.href = 'https://jojowiki.com/Bigmouth_Strikes_Again';

    } else if (randomNumber === 162){
        name.textContent = 'Cat Size';
        info.textContent = "Cat Size constricts wires around a victim's body part to pull them up.";
        stats.src = 'StandStatsImgs/CatSizeStats.png';
        image.src = 'StandImgs/CatSize.png'
        link.href = 'https://jojowiki.com/Cat_Size';

    } else if (randomNumber === 163){
        name.textContent = 'Bags Groove';
        info.textContent = 'Bags Groove puts a disease on something, and if a victim touches that object, they will be infected with lesion(along with the Stand in their body)';
        stats.src = 'StandStatsImgs/BagsGrooveStats.png';
        image.src = 'StandImgs/BagsGroove.png'
        link.href = 'https://jojowiki.com/Bags_Groove';

    } else if (randomNumber === 164){
        name.textContent = 'Glory Days';
        info.textContent = "Glory Days controls the speed of bullets that are show out of the user's gun";
        stats.src = 'StandStatsImgs/GloryDaysStats.png';
        image.src = 'StandImgs/GloryDays.png'
        link.href = 'https://jojowiki.com/Glory_Days';

    } else if (randomNumber === 165){
        name.textContent = "Lyin' Eyes";
        info.textContent = "Lyin' Eyes can manipulate nematodes to be able to figure out if someone is lying through a yes or no questions, similar to a polygraph.";
        stats.src = 'StandStatsImgs/LyinEyesStats.png';
        image.src = 'StandImgs/LyinEyes.png'
        link.href = 'https://jojowiki.com/Lyin%27_Eyes';

    } else if (randomNumber === 166){
        name.textContent = '200 Balloons';
        info.textContent = '200 Balloons can inflate anything so that they pop like a balloon.';
        stats.src = 'StandStatsImgs/200BalloonsStats.png';
        image.src = 'StandImgs/200Balloons.png'
        link.href = 'https://jojowiki.com/200_Balloons';

    } else if (randomNumber === 167){
        name.textContent = 'Tenore Sax';
        info.textContent = "Tenore Sax can make an illusion of a labyrinth, or it could make a different illusion(like D'arby's island room).";
        stats.src = 'StandStatsImgs/TenoreSaxStats.png';
        image.src = 'StandImgs/TenoreSax.png'
        link.href = 'https://jojowiki.com/Tenore_Sax#Anime';

    } else if (randomNumber === 168){
        name.textContent = 'Achtung Baby';
        info.textContent = 'Achtung Baby will turn the user invisible(or anything around the user).';
        stats.src = 'StandStatsImgs/AchtungBabyStats.png';
        image.src = 'StandImgs/AchtungBaby.png'
        link.href = 'https://jojowiki.com/Achtung_Baby#Manga';

    } else if (randomNumber === 169){
        name.textContent = 'Nut King Call';
        info.textContent = 'Nut King Call can turn anything into nuts and bolts that can be removed and put back on(whatever the user chooses).';
        stats.src = 'StandStatsImgs/NutKingCallStats.png';
        image.src = 'StandImgs/NutKingCall.png'
        link.href = 'https://jojowiki.com/Nut_King_Call';
    }
})