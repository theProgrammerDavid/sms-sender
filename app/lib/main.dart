import 'package:flutter/material.dart';
import 'package:sms/sms.dart';
import 'button.dart';
import 'constants.dart';


 SmsQuery query ;

void sendSms(){
   SmsSender sender = new SmsSender();
  String address = '9370277948';
  
  SmsMessage message = new SmsMessage(address, 'test sms');
  message.onStateChanged.listen((state) {
    if (state == SmsMessageState.Sent) {
      print("SMS is sent!");
    } else if (state == SmsMessageState.Delivered) {
      print("SMS is delivered!");
    }
  });
  sender.sendSms(message);
}


void main() {
    runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'SMS Node',
      theme: ThemeData(
       
        primarySwatch: Colors.deepPurple,
       
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: MyHomePage(title: 'SMS Node',),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
 
  @override
  Widget build(BuildContext context) {
    
    return Scaffold(
      // appBar: AppBar(
     
      //   title: Text(widget.title),
      // ),
      backgroundColor: darkPurple,
      body: Center(
       
        child: Column(
          
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
          new MyButton('Connect',Colors.orange, (){
            print('Logged In');
          }),
          ],
        ),
      ),
      // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
