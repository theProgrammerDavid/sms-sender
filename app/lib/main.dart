import 'package:flutter/material.dart';
import 'package:sms/sms.dart';
import 'button.dart';
import 'constants.dart';
import 'card.dart';

SmsQuery query;

void sendSms() {
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
        primarySwatch: mediumPurple,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: MyHomePage(
        title: 'SMS Node',
      ),
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
  TextEditingController uname;
  TextEditingController pass;
  TextEditingController ucode;

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
            Spacer(flex: 1),
            Text(
              "SMS Node",
              style: TextStyle(
                  color: lightPurple,
                  fontSize: 40,
                  fontWeight: FontWeight.bold),
            ),
            Spacer(flex: 1),
            new Container(
              margin: const EdgeInsets.all(15.0),
              padding: const EdgeInsets.all(3.0),
              decoration: BoxDecoration(
                  border: Border.all(color: lightPurple, width: 5),
                  borderRadius: new BorderRadius.circular(15)),
              child: Column(children: <Widget>[
                SizedBox(height: 10),
                //username
                new TextField(
                  controller: uname,
                  style: new TextStyle(color: lightPurple),
                  decoration: new InputDecoration(
                    hintText: 'Username',
                    hintStyle: new TextStyle(color: lightPurple),
                    // fillColor: Colors.orange, filled: true
                  ),
                ),
                SizedBox(height: 20),
                //password
                new TextField(
                  obscureText: true,
                  controller: uname,
                  style: new TextStyle(color: lightPurple),
                  decoration: new InputDecoration(
                    hintText: 'Password',
                    hintStyle: new TextStyle(color: lightPurple),
                    // fillColor: Colors.orange, filled: true
                  ),
                ),
                SizedBox(height: 10),
                //unique string
                new TextField(
                  controller: uname,
                  style: new TextStyle(color: lightPurple),
                  decoration: new InputDecoration(
                    hintText: 'Unique String',
                    hintStyle: new TextStyle(color: lightPurple),
                    // fillColor: Colors.orange, filled: true
                  ),
                ),

                MyButton("Login", lightPurple, () {
// Navigator.push(
//             context,
//             MaterialPageRoute(builder: (context) => MainNav()),
//           );
                }),
              ]),
            ),
            Spacer(flex: 1),
          ],
        ),
      ),
      // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
