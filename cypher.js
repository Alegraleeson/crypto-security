

function cypher(phrase){
    let cy = []
    for(let i=0;i<phrase.length;i++){
      if(phrase[i].match(/a/gi)){
        let a = phrase.slice(phrase[i])
        a = 'r'
        cy.push(a)
      }else if(phrase[i].match(/b/gi)){
        let b = phrase.slice(phrase[i])
        b = 'u'
        cy.push(b)
      }else if(phrase[i].match(/c/gi)){
        let c = phrase.slice(phrase[i])
        c = 'w'
        cy.push(c)
      }else if(phrase[i].match(/d/gi)){
        let d = phrase.slice(phrase[i])
        d = 'x'
        cy.push(d)
      }else if(phrase[i].match(/e/gi)){
        let e = phrase.slice(phrase[i])
        e = 'y'
        cy.push(e)
      }else if(phrase[i].match(/f/gi)){
        let f = phrase.slice(phrase[i])
        f = 'z'
        cy.push(f)
      }else if(phrase[i].match(/g/gi)){
        let g = phrase.slice(phrase[i])
        g = 'i'
        cy.push(g)
      }else if(phrase[i].match(/h/gi)){
        let h = phrase.slice(phrase[i])
        h = 'l'
        cy.push(h)
      }else if(phrase[i].match(/i/gi)){
        let eye = phrase.slice(phrase[i])
        eye = 'o'
        cy.push(eye)
      }else if(phrase[i].match(/j/gi)){
        let j = phrase.slice(phrase[i])
        j = 'v'
        cy.push(j)
      }else if(phrase[i].match(/k/gi)){
        let k = phrase.slice(phrase[i])
        k = 'e'
        cy.push(k)
      }else if(phrase[i].match(/l/gi)){
        let l = phrase.slice(phrase[i])
        l = 'b'
        cy.push(l)
      }else if(phrase[i].match(/m/gi)){
        let m = phrase.slice(phrase[i])
        m = 'a'
        cy.push(m)
      }else if(phrase[i].match(/n/gi)){
        let n = phrase.slice(phrase[i])
        n = 't'
        cy.push(n)
      }else if(phrase[i].match(/o/gi)){
        let o = phrase.slice(phrase[i])
        o = 's'
        cy.push(o)
      }else if(phrase[i].match(/p/gi)){
        let p = phrase.slice(phrase[i])
        p = 'c'
        cy.push(p)
      }else if(phrase[i].match(/q/gi)){
        let q = phrase.slice(phrase[i])
        q = 'd'
        cy.push(q)
      }else if(phrase[i].match(/r/gi)){
        let r = phrase.slice(phrase[i])
        r = 'f'
        cy.push(r)
      }else if(phrase[i].match(/s/gi)){
        let s = phrase.slice(phrase[i])
        s = 'g'
        cy.push(s)
      }else if(phrase[i].match(/t/gi)){
        let t = phrase.slice(phrase[i])
        t = 'h'
        cy.push(t)
      }else if(phrase[i].match(/u/gi)){
        let u = phrase.slice(phrase[i])
        u = 'j'
        cy.push(u)
      }else if(phrase[i].match(/v/gi)){
        let v = phrase.slice(phrase[i])
        v = 'k'
        cy.push(v)
      }else if(phrase[i].match(/w/gi)){
        let w = phrase.slice(phrase[i])
        w = 'm'
        cy.push(w)
      }else if(phrase[i].match(/x/gi)){
        let x = phrase.slice(phrase[i])
        x = 'n'
        cy.push(x)
      }else if(phrase[i].match(/y/gi)){
        let y = phrase.slice(phrase[i])
        y = 'p'
        cy.push(y)
      }else if(phrase[i].match(/z/gi)){
        let z = phrase.slice(phrase[i])
        z = 'q'
        cy.push(z)
      }
         
      
      
    }
    return cy.join('')
  }
  
  console.log(cypher('I love cryptography'))
  