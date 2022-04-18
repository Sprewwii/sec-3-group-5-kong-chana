# KongChana (โกงชนะ)

เว็บไซต์สำหรับค้นหารายชื่อผู้โกงเพื่อให้ผู้ใช้งานสามารถเข้ามาตรวจสอบได้ว่าร้านที่ตนเองจะซื้อของด้วยนั้นมีประวัติการโกงหรือไม่ โดยที่หน้าเว็บไซต์จะแสดงข้อมูลของร้านค้าที่โกง ดังนี้: 
+ รูปหน้าร้านหรือรูปโปรไฟล์ร้าน (ตรงจุดนี้ถ้าหากเพิ่งเพิ่มร้านโกงมาใหม่จะมีรูปdefaultแสดงให้ก่อน) 
+ ชื่อแอคเคาท์ร้าน 
+ ชื่อจริงนามสกุลของผู้โกง 
+ ธนาคาร 
+ เลขบัญชี 
+ จำนวนผู้เสียหายที่ถูกร้านนั้นๆโกง
+ ประวัติผู้โกง (โดยผู้ใช้จะสามารถเห็นได้ก็ต่อเมื่อเอาเมาส์ไปhoverไว้ที่ข้อมูลร้านนั้น)

มีระบบ "ไฟลุก(on fire)" คือร้านใดที่มีจำนวนผู้ถูกโดนโกงเยอะมากกว่า 100 คนจะมีการใส่ไอค่อนรูปไฟ แสดงให้เห็นว่าร้านนี้มีประวัติการโกงเยอะและควรเฝ้าระวังมากที่สุด 

## Function

### ระบบค้นหารายชื่อผู้โกง 
สามารถกดที่เมนู 'ค้นหา' เว็บไซต์จะแสดงแถบค้นหาขึ้นมา โดยผู้ใช้งานสามารถค้นหาได้ด้วยชื่อจริง นามสกุล ชื่อร้าน หรือเลขบัญชีผู้โกง หากค้นหาไม่เจอเว็บไซต์จะแสดงว่า 'ไม่มีข้อมูลที่คุณค้นหาอยู่'
![Image](/imgFunctionInReadme/functionSearch.gif)

### ระบบเพิ่มรายชื่อผู้โกง
สามารถกดที่เมนู 'เพิ่มรายชื่อผู้โกง' เพื่อเพิ่มร้านโกงใหม่เข้าสู่ระบบ โดยถ้าหากยังไม่เข้าสู่ระบบตัวปุ่มจะเป็นสีเทาจางเพื่อไม่ให้ผู้ใช้กดเพิ่มรายชื่อได้ แต่ถ้าผู้ใช้เข้าสู่ระบบแล้วจะสามารถกดเพิ่มได้ เข้าไปจะมีการให้กรอกชื่อจริง นามสกุลของผู้โกง ชื่อร้าน ธนาคาร เลขบัญชี และคำอธิบายเพิ่มเติม พอกรอกเสร็จกดปุ่มเพิ่มผู้โกง จะมีการนำข้อมูลที่เรากรอกเข้าสู่ระบบ แสดงบนหน้าเว็บไซต์

### ระบบ ฉันก็โดนโกง
สามารถกดได้ที่ปุ่ม 'ฉันก็โดนโกง' ตามรายชื่อร้านต่าง ๆ เพื่อให้ผู้ใช้งานได้รวบรวมจำนวนคนที่ถูกร้านนี้โกง ซึ่งถ้าผู้ใช้ไม่เข้าสู่ระบบตัวปุ่มจะเป็นสีเทาและไม่สามารถกดได้(เช่นเดียวกันกับระบบเพิ่มรายชื่อผู้โกง) แต่ถ้าหากอยู่ในระบบแล้วก็สามารถกดได้โดยถ้าหากกดไปปุ่มจะเพิ่มจำนวนด้านหลังปุ่มและกลายเป็นสีเขียวเพื่อให้ผู้ใช้รู้ว่ากดร้านนี้ไปแล้ว  และมีฟังก์ชั่นการลบ,แก้ไข,รายงานข้อมูลของร้านค้าที่โกงได้ โดยถ้ากด edit จะขึ้นป้อบอัพฟอร์มให้แก้ไขข้อมูล ถ้ากด delete จะขึ้นป้อบอัพยืนยันการลบ

### ระบบเข้าสู่ระบบ
สามารถกดที่เมนู 'เข้าสู่ระบบ' เมื่อทำการเข้าสู่ระบบแล้ว ผู้ใช้งานจะสามารถใช้ฟังก์ชันเพิ่มเติมในเว็บไซต์ได้ นั้นก็คือระบบเพิ่มรายชื่อผู้โกงและระบบฉันก็โดนโกง โดยการเข้าสู่ระบบผู้ใช้จะต้องทำการกรอกชื่อผู้ใช้และรหัสผ่าน และพอผู้ใช้เข้าสู่ระบบแล้วจะมีการแสดงข้อความ "ยินดีต้อนรับ" พร้อมชื่อผู้ใช้ตรงชื่อเว็บไซต์ และจากแถบเข้าสู่ระบบจะเปลี่ยนเป็นออกจากระบบแทน

## views
มีหน้าเพจทั้งหมด 3 หน้า:
- หน้าหลัก (Home) มีช่องสำหรับเสิร์ชค้นหารายชื่อของร้านค้าโดยสามารถค้นหาจากชื่อจริง นามสกุล ชื่อร้านหรือเลขบัญชีผู้โกง และมีการแสดงร้านค้าที่โกง ซึ่งสามารถที่จะกดปุ่มฉันก็โดนโกง เพื่อให้ผู้ใช้งานได้รวบรวมจำนวนคนที่ถูกร้านนี้โกง และ ยังมีmeatballs menu ซึ่งจะมี edit report และ delete โดย edit จะสามารถแก้ไขข้อมูลต่างๆของผู้โกง delete เมื่อกดแล้วจะเด้ง popup เพื่อให้ยืนยันการลบข้อมูล
- เพิ่มรายชื่อผู้โกง (AddScammer) มีฟอร์มสำหรับเขียนเพิ่มร้านค้าที่โกง โดยจะมีรายละเอียด ชื่อ นามสกุล ชื่อร้าน ธนาคาร เลขบัญชี และ คำอธิบายเพิ่มเติม
- เกี่ยวกับเรา (AboutUs) แสดงรายชื่อผู้จัดทำเว็บไซต์

## INT203_S3_Group5 🎒

| NO   | NAME                 | STUDENT ID  |
| :--: | -------------------- | ----------- |
| 1    | นายสาริน วีรกุล         | 63130500115 |
| 2    | นางสาวสุพิชา พิริยะศิริพันธ์ | 63130500124 |
| 3    | นายอธิติ คงสบสิน        | 63130500128 |
| 4    | นางสาวหทัยวรรณ เมฆวี   | 63130500160 |
| 5    | นายอุดมชัย นิราศรพ      | 63130500161 |

## Tools use in the project
+ vue.js
+ Tailwind css
+ DaisyUI
+ Flowbite

## REFERENCE
[Blacklistseller ร่วมต้านภัยฉ้อโกงออนไลน์](https://www.blacklistseller.com/)
