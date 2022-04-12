# 1.
polymorphism = (override || overload) class (not same, but similary)
encap = protect accessing directly
data abs = ไม่แน่ใจคับ technique of hiding implementation รึเปล่า
inher = สืบทอด class, subclass สืบทอดจาก parent class (methods & properties except protected accessing) 

# 2.
Model-view-controller(ก็ตรงตัวคับ)
M = database, V = user เห็น, C = user take action
while(1) V --user_action--> C --update--> M --notyf--> C --update--> V

# 3.
http:   1.
{
type: 'POST', // get, post, delete, update, patch, ฯลฯ
  url: http://theappurl.com/api/v1/method/,
  data: {},
  crossDomain: true,
  beforeSend: function(xhr) {
    xhr.setRequestHeader('Authorization', 'Basic ' + btoa(unescape(encodeURIComponent(YOUR_USERNAME + ':' + YOUR_PASSWORD))))
  }
}
CRUD = Create(insert), Read(select), Update(update) & Delete(delete) // API

# 6.
DOM tree = tags
<body>
<div clasname="div1">
...
..
</div>
<div clasname="div2">
...
..
</div>
ฯลฯ a button li nav ol span ul header footer section
</body>

XPath = uses path to select node, node-set

# 5.
Quality of Service (QoS) in MQTT messaging is an agreement between sender and receiver on the guarantee of delivering a message.
0 - at most once
1 - at least once
2 - exactly once

Message Queue Telemetry Transport(MQTT) protocal ที่ต่อยอดจาก TCP/IP (ความรู้ใหม่เลยคับ)
นิยมใช้พวกงาน IoT

# 6.  __/\__

# 7.

หัวใจหลัก => ใช้โมเดล publish/subscribe และออกแบบมาเพื่ออุปกรณ์ที่มีความเร็วในการรับและส่งข้อมูลต่ำ (low bandwidth)

# 8.
Agile บ.เก่าเคยใช้อยู่คับแต่ Scrum ไม่แน่ใจคับ (ทีมช่วยกันรุมงาน รึเปล่า)
หัวใจหลักๆของ agile ก็ทำเป็นลูปเท่านั้น เปลี่ยนแแปลงได้ หลังจบลูปเท่านั้น
เช่นถ้า เกิด design แล้วลูกค้าเปลี่ยนใจกลางทาง แต่ที่ design มากำลังทำอยู่
ต้องทำให้จบก่อน ถึงจะเปลี่ยนแปลงได้แล้วก็วนลูปคับ


