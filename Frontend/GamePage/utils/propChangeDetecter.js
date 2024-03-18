const proxfy = new Proxy(game.player, 
    {
      get(target, key) {
        if (key == 'isProxy')
          return true
    
        const prop = target[key];
    
        if (typeof prop == 'undefined')
          {return}
        if (!prop.isProxy && typeof prop === 'object')
          {target[key] = new Proxy(prop, this)
          }
        return target[key]
      },
      set(target, key, value) {
        console.log('Setting', target, `.${key} to equal`, value)
    
        target[key] = value
        return true
      }
    });