export function MakeReactiveObject(object, setCallback) {
  return new Proxy(object,
    {
      get(target, key) {
        if (key == 'isProxy')
          return true

        const prop = target[key];

        if (typeof prop == 'undefined') { return }
        if (!prop.isProxy && typeof prop === 'object') {
          target[key] = new Proxy(prop, this)
        }
        return target[key]
      },
      set(target, key, value) {
        setCallback(target, key, value)

        target[key] = value
        return true
      }
    });
}
