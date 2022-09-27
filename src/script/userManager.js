import { reactive } from "vue";
import { ref } from "vue";
export const userManager = reactive({
scammerLists: [
        {
          "shopName": "AthitiITShop",
          "firstName": "Athiti",
          "lastName": "Kongsobsin",
          "bank": "SCB",
          "bankId": "2392666831",
          "count": 2014,
          "isActive": true,
          "img": "images/AthitiITShop.jpg",
          "description": "โดนนายคนนี้โกงค่ะ โอนเงินซื้อมือถือแล้วไม่ส่งของให้ แจ้งความแล้วคดีก็ไม่คืบหน้า ตำรวจบอกว่าไม่สามารถทำอะไรนางได้ มีคนโดนเยอะมากค่ะ #โดนโกงเงิน #ขายไอโฟน #อธิติบางมด",
          "id": 1
        },
        {
          "shopName": "SprewBakeryVer2",
          "firstName": "Supicha",
          "lastName": "Piriyasiriphan",
          "bank": "SCB",
          "bankId": "23926645555",
          "count": 16,
          "isActive": false,
          "img": "images/SprewBakery.jpg",
          "description": "ร้านขายขนมปังออนไลน์ผ่านทวิตเตอร์ บัญชี @SprewBakery มีประวัติการโกงในด้อมอนิเมะมาก่อนที่จะเข้าวงการขายขนมออนไลน์ เปิดบัญชีได้สองอาทิตย์ ก็มีผู้เสียหายมากกว่า 10 คน",
          "id": 2
        },
        {
          "shopName": "KhobfhaGameShop",
          "firstName": "Sarin",
          "lastName": "Weerakun",
          "bank": "SCB",
          "bankId": "23349008787",
          "count": 8,
          "isActive": false,
          "img": "images/KhobfhaGameShop.jpg",
          "description": "ร้านขายเกมที่บอกว่ารอพรีออเดอร์สินค้า 2 อาทิตย์ แต่รอยัน 2 ปีแล้วยังไม่ได้เลยครับ คดีก็หมดอายุความแล้ว เพราะฉะนั้นผมเลยอยากมาแชร์ประสบการณ์ส่วนตัวที่เจอ เพื่อเตือนภัยทุก ๆ คนครับ",
          "id": 3
        },
        {
          "id": 4,
          "shopName": "JubbyShabu",
          "firstName": "Udomchai",
          "lastName": "Nirasrop",
          "bank": "Kbank",
          "bankId": "52136362234",
          "count": 5,
          "isActive": false,
          "img": "images/JubbyShabu.jpg",
          "description": "ชาบูร้านนี้บอกจะแถมหม้อต้มชาบู แต่ดันให้เป็นหม้อของเล่นมาครับ หลอกเรื่องนั้นไม่เท่าไหร่ ผมสั่ง set shabu big 5 set ก็เอามาให้แค่ set เดียวแล้วเอาเงินหนีไปไม่รับผิดชอบอะไรเลยครับ"
        },
        {
          "shopName": "FahhCosmetics",
          "firstName": "HataiwanSudSexy",
          "lastName": "Mekvee",
          "bank": "SCB",
          "bankId": "10010110009",
          "count": 99,
          "isActive": false,
          "img": "images/FahhCosmetics.jpg",
          "description": "เครื่องสำอางปลอม แต่ดันบอกขายของจริง งงมาก ๆ ค่ะ ติดตามข่าวจากทวิตเตอร์ #FahhCosmeticsโกง ได้นะคะ",
          "id": 5
        }
],
// Fetch API get สำหรับการเรียกใช้ข้อมูลใน db.json ส่วน scammerLists
getScammers:function (){
    // const res = await fetch("http://localhost:3001/scammerLists");
    // if (res.status === 200) {
    //     scammerLists.value = await res.json();
    //     sortScammers(scammerLists.value);
    //     console.log(scammerLists.value);
    // } else console.log("error, can't get data");
    return this.scammerLists
},
addNewScammer:function (newScammer){
        // const res = await fetch("http://localhost:3001/scammerLists", {
        //     method: "POST",
        //     headers: { "content-type": "application/json" },
        //     body: JSON.stringify(newScammer),
        // })
        // if (res.status === 201) {
            // const addedScammer = await res.json()
            this.scammerLists.push(newScammer)
            alert("You add new scammer")
        // } else console.log("cannot add new scammer")
    },
// Fetch API DELETE สำหรับการลบข้อมูลรายชื่อผู้โกงใน db.json
removeScammer: function(deleteScammerId){
        const confirmDelete = ref(false)
        confirmDelete.value = confirm(`Do you want to delete this scammer`)
        console.log(confirmDelete)
        if (confirmDelete.value == true) {
            // const res = await fetch(`http://localhost:3001/scammerLists/${deleteScammerId}`, { method: 'DELETE' })
            // if (res.status === 200) {
                this.scammerLists = this.scammerLists.filter((scammerSelected) => scammerSelected.id !== deleteScammerId)
                console.log("delete success")
            // } else console.log("can't delete data")
        } else console.log("YOU CANCEL")
    },
editInfo: function(scamm){
        console.log(scamm.id)
        // const res = await fetch(`http://localhost:3001/scammerLists/${scamm.id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         shopName: scamm.shopName,
        //         firstName: scamm.firstName,
        //         lastName: scamm.lastName,
        //         bank: scamm.bank,
        //         bankId: scamm.bankId,
        //         count: scamm.count,
        //         isActive: scamm.isActive,
        //         img: scamm.img,
        //         description: scamm.description
        //     })
        // })
        // if (res.status === 200) {
            // const editedScammer = await res.json()
            this.scammerLists = this.scammerLists.map((scammer) =>
                scammer.id === scamm.id ? {
                    ...scammer,
                    shopName: scamm.shopName,
                    firstName: scamm.firstName,
                    lastName: scamm.lastName,
                    bank: scamm.bank,
                    bankId: scamm.bankId,
                    count: scamm.count,
                    isActive: scamm.isActive,
                    img: scamm.img,
                    description: scamm.description
                } : scammer
            )
            console.log("edited successfully")
            alert('Edited succesfully')
        // } else console.log("error, can't edit")
    },
    // Fetch API get สำหรับการเรียกใช้ข้อมูลใน db.json ส่วน aboutUs
getAboutUs: function() {
  // const res = await fetch("http://localhost:3001/aboutUs")
  // if(res.status === 200){
  //   teams.value = await res.json()
  //   console.log(teams.value)
  // } else console.log("can't get data")
  return [
    {
      "id": 63130500115,
      "name": "สาริน วีรกุล",
      "aka": "sSilence",
      "description": "ผมชื่อสาริน วีรกุล ทำหน้าที่ช่วยเขียนและปรับปรุง code ในทุก ๆ ส่วน ตัวอย่างเช่น components, router, views เป็นต้นครับ",
      "imgPath": "images/aboutUs/kobfha.jpeg"
    },
    {
      "id": 63130500124,
      "name": "สุพิชา พิริยะศิริพันธ์",
      "aka": "sprewwii",
      "description": "ทำหน้าที่ออกแบบตัวหน้าเว็บไซต์ จัดการเกี่ยวกับ UX UI component ร่วมกับเพื่อน ๆ ในกลุ่มค่ะ",
      "imgPath": "images/aboutUs/prew.jpeg"
    },
    {
      "id": 63130500128,
      "name": "อธิติ คงสบสิน",
      "aka": "7435ヅ",
      "description": "ผมชื่ออธิติ คงสบสิน ทำหน้าที่ออกแบบและทำระบบการทำงานในหน้าเว็บไซต์ และจัดการเกี่ยวกับการ fetch ข้อมูลต่างๆจาก Database",
      "imgPath": "images/aboutUs/jame.jpeg"
    },
    {
      "id": 63130500160,
      "name": "หทัยวรรณ เมฆวี",
      "aka": "Fahsodsai",
      "description": "หนูชื่อหทัยวรรณ เมฆวี ทำหน้าที่ช่วยฝ่าย UI ของเว็บและช่วยเสริมค่ะ",
      "imgPath": "images/aboutUs/fah.jpeg"
    },
    {
      "id": 63130500161,
      "name": "อุดมชัย นิราศรพ",
      "aka": "jubby",
      "description": "ทำหน้าที่เขียนcodeโดยรวม และแก้ไขcode เพิ่มfunctionต่าง ๆ",
      "imgPath": "images/aboutUs/jub.jpeg"
    }
  ]
}
})