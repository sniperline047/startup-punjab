var express=require('express');
var mysql= require('mysql');
var routes=require('routes');
var session=require('express-session');
const multer=require('multer');
var url=require('url');
var http=require('http');
var path=require('path');
const Nexmo = require('nexmo');
var bodyParser=require('body-Parser');
var app=express();
app.use(session({secret:'ssshhhhhh',saveUninitialized:true,resave:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.get('/', (req, res) => {
 sess=req.session;
res.render('index.ejs');
});
//
const nexmo = new Nexmo({
  apiKey: '5ff9c3fe',
  apiSecret: 'DY5NanTHC7MVKhfh'
}, { debug: true });
//
app.post('/', (req, res) => {
  // res.send(req.body);
  // console.log(req.body);
  const { number, text } = req.body;

  nexmo.message.sendSms(
    '+918054925330', number, text, { type: 'unicode' },
    (err, responseData) => {
      if(err) {
        console.log(err);
      } else {
        console.dir(responseData);
      }
    })
  });

const accountSid='AC6cb7723d0856a720c95379cee1aedcc1';
const authToken='01695de040109de48d50b131b061e672';
const client=require('twilio')(accountSid,authToken);
app.get('/msg',function(req,res)
{
  client.messages
  .create({
    body:'hey  i from pseb department i want to do discussion with you on some issue',
    from:'+12053862304',
    to:'+917007698977'
  })
  .then(message=>console.log(message.sid));
  res.redirect('/');

})

//app.set('port',process.env.port||4745);
var sess;
/*app.get('/',function(req,res)
{ sess=req.session ;
  res.render("index.ejs");
})*/
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, (file.filename = file.originalname));
  }
});
const upload = multer({ storage: storage });
var con =mysql.createConnection({host:'localhost',user:'root',password:'',database:'startup'});
app.post("/upload", upload.single("file"), (req, res, next) => {
  sess=req.session;
  console.log(req.file.filename);
  var sql="insert into  data(depid,docs) values('"+req.body.deptid+"','"+req.file.filename+"')";
  con.query(sql,function(err,rows)
  {
    if(err)
     throw err;
     if(rows.length)
     {
       res.render("disp.ejs",{data:rows});
       console.log("file added");
     }
   });

  //   fs.writeFile("./new", req.file);
  //res.send("File Uploaded");
});

var con =mysql.createConnection({host:'localhost',user:'root',password:'',database:'startup'})
app.post('/signup',function(req,res)
{sess=req.session;
  sess.name=req.body.name;
  sess.age=req.body.age;
  sess.father=req.body.fname;
   sess.location=req.body.district;
   sess.uid=req.body.adhaar;
   sess.dob=req.body.dob;
  sess.pincode=req.body.postal;
sess.deptname=req.body.deptname;
sess.email=req.body.email;
sess.pass=req.body.password;
sess.post=req.body.post
sess.deptname=req.body.dep;
console.log(sess.deptname);
var sql1="insert into signin(name,location,uid,pincode,phone,email,emp_id,password,post,deptname)values('"+req.body.name+"','"+req.body.district+"','"+req.body.adhaar+"','"+req.body.postal+"','"+req.body.mobile+"','"+req.body.email+"','"+req.body.eid+"','"+req.body.password+"','"+req.body.post+"','"+req.body.dep+"')";
con.query(sql1,function(err,rows)
{

if(rows.length)
{
  res.send("1");
}
if(err)
{
  throw err;
}
});


res.end();
});
/*app.get('/ch',function(req,res)
{
  res.render("dsd");
})*/
app.post('/check',function(req,res)
{
  sess=req.session;
  console.log(sess.location);
})


app.post("/ldone",function(req,res)
{ sess=req.session;
  sess.name=req.body.email  ;
  sess.pass=req.body.password;
  console.log(req.body.email);
  console.log(req.body.password);
  //res.end('succesful');
  var sql2="select name from signin where email='"+sess.name+"' and password='"+sess.pass+"'";
  con.query(sql2,function(err,rows)
{
  console.log(rows);
  if(rows)
   res.send("1");
  else {
     res.send("0");
  }
})

});
app.post("/done", function (req, res) {
  console.log(req.body.username);
  console.log(req.body.password);
  var sql="update  department set email='"+req.body.email+"',website='"+req.body.website+"',phone='"+req.body.phone+"' where deptname='"+req.body.deptn+"'";
  con.query(sql,function(err,rows)
  {
    if(err)
     throw err;
     if(rows.length)
     {
       console.log("updated");
     }
   });

  //   fs.writeFile("./new", req.file);
  res.send("File Uploaded");
});
app.post('/data',function(req,res)
{   sess=req.session;
  sess.u=req.body.url;
  console.log(req.body.url);
  var sql="insert into url(doc,dd) values('"+req.body.url+"',curdate())";
  con.query(sql,function(err,rows)
{
  if(err)
  throw err;
  if(rows)
  {
    res.send('success');
  }
});
});
app.post("/edit",function(req,res)
{
var sql="select * from department where deptname='"+name+"'";
cont.query(sql,function(err,rows)
{
  res.render("disp2.ejs",{data:rows});
});
});
app.get('/user',function(req,res)
{
  res.send('sess.location');
})
app.post('/dat',function(req,res)
{
  sess=req.session;
  console.log('succes');
  var sql="select url,dd from url";
  con.query(sql,function(err,rows)
  {
    if(rows)
    { res.send(rows);
      //res.send('<a href="' + rows[0] + '">' + rows[0] + '</a>')
    }
  });
})
app.post('/next',function(req,res)
{
 sess=req.session;
 console.log(req.body.dep);

 //console.log(sess.location);
 var sql3="select name,post,phone,email from signin where deptname='"+req.body.dep+"'";
con.query(sql3,function(err,rows)
{  if(rows)
  {console.log(rows);
  res.render("edit.ejs",{data:rows});
}
})
})
app.use(express.static(path.join(__dirname,'uploads')));
app.use(express.static(path.join(__dirname,'public')));
app.listen(3002,'0.0.0.0',function()
{
  console.log("app started on port 3002");
});
/*http.createServer(app).listen(app.get('port'),function(){
  console.log('express server listening'+app.get('port'));
});*/
