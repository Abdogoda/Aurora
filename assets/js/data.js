let games = [
 {
  name: "Grand Theft Auto",
  width: 60,
  image: "gata.jpg",
  price: 10,
  type: "pc",
  link:
   "https://www.amazon.co.uk/Grand-Theft-Auto-Definitive-Nintendo/dp/B09KSCHT4F/ref=sr_1_1?adgrpid=1183075482502330&hvadid=73942432554878&hvbmt=bb&hvdev=c&hvlocphy=146223&hvnetw=o&hvqmt=b&hvtargid=kwd-73942395180621%3Aloc-187&hydadcr=24435_2219445&keywords=switch+game+grand+theft+auto&qid=1670274785&sr=8-1",
 },
 {
  name: "Free Fire",
  width: 90,
  image: "free_fire.jpg",
  price: 20,
  type: "mobile",
  link:
   "https://play.google.com/store/apps/details?id=com.dts.freefireth&gl=US&pli=1",
 },
 {
  name: "Red Dead Redemption",
  width: 30,
  image: "red_dead.jpg",
  price: 30,
  type: "pc",
  link:
   "https://www.ebay.co.uk/itm/285035965567?hash=item425d77ac7f:g:-GoAAOSwS5ljbrQh&amdata=enc%3AAQAHAAAA8Cni4pDC4%2BEGUDXNWsChfhPr0fTofyRs2lcS424AFYxVMC6UDNNtn2tJt3%2F0Hv3sEjdboCZlt4jEHmYkJtl9tph0tWnJevONaRzDPJF65jAMdy9AngLF8j4B8fyBGPex8OkTJLuKzlaA7lUYtrz42tW1TtCxdXecvs7ihjxwhDYt8zFxsNFDCTlfZqcjlb2OMYZzHG9runv3nGiaJeiNoHOOvni0etvsid4Cyf%2F%2FoS5NXDgtcdUI6o0Cm7Px%2B5wW9GVepxjfSOu950ZA40pTZ%2BdsAwSJR1bdO63O6qXbAg2GiEOcA%2FSyKXsWTSFpHf31Fg%3D%3D%7Ctkp%3ABFBM3Oalwpxh",
 },
 {
  name: "Shadow Fight",
  width: 70,
  image: "shadow_fight.jpg",
  price: 40,
  type: "mobile",
  link:
   "https://play.google.com/store/apps/details?id=com.nekki.shadowfight&gl=US",
 },
 {
  name: "Subway Surfers",
  width: 20,
  image: "subway.jpg",
  price: 50,
  type: "mobile",
  link: "https://poki.com/en/g/subway-surfers",
 },
 {
  name: "Village",
  width: 50,
  image: "village.png",
  price: 60,
  type: "pc",
  link:
   "https://www.amazon.co.uk/Resident-Evil-Village-Gold-PS5/dp/B0B7GGKYZW/ref=sr_1_1?adgrpid=1184174928567691&hvadid=74011135234798&hvbmt=be&hvdev=c&hvlocphy=146223&hvnetw=o&hvqmt=e&hvtargid=kwd-74011078131614%3Aloc-187&hydadcr=24861_2220800&keywords=the+village+resident+evil&qid=1670275062&sr=8-1",
 },
 {
  name: "Free Guy",
  width: 10,
  image: "free_guy.jpg",
  price: 70,
  type: "pc",
  link: "#",
 },
 {
  name: "Clash Royale",
  width: 40,
  image: "clash.jpg",
  price: 80,
  type: "pc",
  link:
   "https://play.google.com/store/apps/details?id=com.supercell.clashroyale&gl=us",
 },
 {
  name: "Call Of Duty",
  width: 40,
  image: "call_of_duty.jpg",
  price: 90,
  type: "mobile",
  link:
   "https://play.google.com/store/apps/details?id=com.activision.callofduty.shooter&gl=us",
 },
 {
  name: "Dying Light2",
  width: 30,
  image: "dying_light.jpg",
  price: 100,
  type: "pc",
  link: "https://store.steampowered.com/app/534380/Dying_Light_2_Stay_Human/",
 },
 {
  name: "Ghost",
  width: 100,
  image: "ghost.jpg",
  price: 110,
  type: "pc",
  link:
   "https://www.amazon.co.uk/Ghost-Tsushima-Directors-Cut-PS5/dp/B098TV5XPX/ref=sr_1_1?adgrpid=1188572992243535&hvadid=74286018472384&hvbmt=be&hvdev=c&hvlocphy=146223&hvnetw=o&hvqmt=e&hvtargid=kwd-74285971072188%3Aloc-187&hydadcr=1024_1907069&keywords=battlefiled&qid=1670275411&s=videogames&sr=1-1",
 },
 {
  name: "Battle Field",
  width: 40,
  image: "battle_field.jpg",
  price: 120,
  type: "mobile",
  link:
   "https://www.ebay.co.uk/itm/304689417176?epid=28050711912&hash=item46f0e78bd8:g:uCoAAOSwjWBhiowV&amdata=enc%3AAQAHAAAAoPMI2G2n2HMQl3IKI8338xdsh1PnA%2FgBr90QSlSBPLlw%2FB%2BtAAKuUeXTfJVSiwg2MDedJIwa7iH03yBI2C%2BDvgG7j3v1%2FfjLDvtqXWVhwVN4hOdqLhdRRSdFJeeCFfUoChWQqgC%2FCjpjjqDeDtfRtsEkAd7N1lQzETGFsEcBJgCBSMqcv0UUcqsd8pwxk1nSr2kVabZMQZ%2FxD5iitGZLcJ4%3D%7Ctkp%3ABk9SR5Kc5cKcYQ",
 },
];
let cardBox = document.querySelector(".cardBox");
games.forEach((game) => {
 let { name, type, image, price, width, link } = game;
 cardBox.innerHTML += `
    <div class="card games_card animeY" data-item="${type}">
    <div class="img-box">
    <img src="assets/img/games/${image}" alt="card-img" />
    </div>
    <div class="content">
    <h4>${name}</h4>
    <div class="progress-line"><span style="width: ${width}%"></span></div>
    <div class="info">
      <p>Pricing <br /><span>$${price}</span></p>
      <a href="${link}" target="_blank" class="btn">Buy Now</a>
    </div>
    </div>
  </div>
  `;
});
// filter games card
let lists = document.querySelectorAll(".list");
let cards = document.querySelectorAll(".card");
lists.forEach((list) => {
 list.addEventListener("click", () => {
  lists.forEach((list) => {
   list.classList.remove("active");
  });
  list.classList.add("active");
  let filterValue = list.getAttribute("data-filter");
  cards.forEach((card) => {
   card.classList.remove("active");
   card.classList.add("hide");
  });
  cards.forEach((card) => {
   if (card.getAttribute("data-item") == filterValue || filterValue == "all") {
    card.classList.add("active");
    card.classList.remove("hide");
   }
  });
 });
});

//=============================================
let tournaments = [
 {
  image: "spider_man.jpg",
  count: 20,
  link: "https://www.youtube.com/watch?v=qIQ3xNqkVC4",
 },
 {
  image: "shadow_fight.png",
  count: 30,
  link: "https://www.youtube.com/watch?v=d_a6AC0BbjQ",
 },
 {
  image: "pubge.jpg",
  count: 40,
  link: "https://www.youtube.com/watch?v=u1oqfdh4xBY",
 },
 {
  image: "free_fire.jpg",
  count: 50,
  link: "https://www.youtube.com/watch?v=oq2Rz2I11l0",
 },
 {
  image: "fortnite.jpg",
  count: 60,
  link: "https://www.youtube.com/watch?v=Daf1uUXE3-M",
 },
 {
  image: "call_of_duety.jpg",
  count: 120,
  link: "https://www.youtube.com/watch?v=r72GP1PIZa0",
 },
];
let boxContainer = document.querySelector(".boxContainer");
tournaments.forEach((tournament) => {
 let { image, count, link } = tournament;
 boxContainer.innerHTML += `
 <div class="box tournaments_box animeY">
 <img
  src="assets/img/tournaments/${image}"
  alt="tournaments-img"
 />
 <div class="content">
  <h4><span>+${count}</span> Matches in Progress..</h4>
  <p>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores debitis
   minus excepturi quos dolorem placeat soluta quod aut voluptas
   voluptates.
  </p>
  <div class="btns">
   <a href="${link}" target="_blank" class="btn">Watch</a>
   <a href="#" class="btn">Join Now</a>
  </div>
 </div>
</div>
  `;
});
