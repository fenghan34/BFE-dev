const myExtends = (SuperType, SubType) => {
  function InheritedSubType(...args) {
    SuperType.apply(this, args)
    SubType.apply(this, args)
  }

  InheritedSubType.prototype = SubType.prototype

  SubType.prototype.__proto__ = SuperType.prototype

  InheritedSubType.__proto__ = SuperType

  return InheritedSubType
}
