import 'package:flutter/material.dart';

class Card extends StatelessWidget {
  double _width;
  double _radius;
  Color _borderColor;
  Widget _child;

  Card(Widget child, double width, double radius, Color borderColor) {
    _width = width;
    _radius = radius;
    _borderColor = borderColor;
    _child = child;
  }

  @override
  Widget build(BuildContext build) {
    return new Container(
      margin: const EdgeInsets.all(15.0),
      padding: const EdgeInsets.all(3.0),
      decoration: BoxDecoration(
          border: Border.all(color: _borderColor, width: _width),
          borderRadius: new BorderRadius.circular(_radius)),
      child: _child,
    );
  }
}
