import React, { useEffect, useState } from 'react'


const ComponentA = () => {

  useEffect(() => {
    // componentDidMount
    console.log('Entrando al componente A')

    return () => { // opcional
      // componentWillUnmount
      console.log("Saliendo del componente A")
    }
  }, [])

  return (
    <h1>Component A</h1>
  )
}

const ComponentB = () => {

  useEffect(() => {
    // componentDidMount
    console.log('Entrando al componente B')

    return () => { // opcional
      // componentWillUnmount
      console.log("Saliendo del componente B")
    }
  }, [])

  return (
    <h1>Component B</h1>
  )
}

const App = () => {

  const [name, setName] = useState("Sam");
  const [lastname, setLastName] = useState("Smith");
  const [show, setShow] = useState(false);

  useEffect(() => {
    // componentDidMount
    console.log('Entrando al componente')

    setName('John')
    setLastName('Doe')

    return () => { // opcional
      // componentWillUnmount
      console.log("voy a eliminar el componente")
    }
  }, [])

  useEffect(() => { // componentDidUpdate
    console.log("ha ocurrido un cambio en el nombre")
  }, [name])

  useEffect(() => { // componentDidUpdate
    console.log("ha ocurrido un cambio en el apellido")
  }, [lastname])

  const mostrarComponente = () => {
    setShow(!show)
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>App</h1>
        </div>
        <div className="col-md-12">
          <div className="form-group mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="lastname" className="form-label">Lastname</label>
            <input type="text" className="form-control" id="lastname" name="lastname" value={lastname} onChange={(e) => setLastName(e.target.value)} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <button className='btn btn-primary btn-sm' onClick={mostrarComponente}>{show ? "Hide" : "Show"}</button>
          {
            show ? <ComponentA /> : <ComponentB />
          }
        </div>
      </div>
    </div>
  )
}

class AppClass extends React.Component {

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="container">
        App
      </div>
    )
  }
}

export default App