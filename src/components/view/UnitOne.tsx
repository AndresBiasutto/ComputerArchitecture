import Tabs from '../organism/Tabs'
import Main from '../template/Main'

const UnitOne = () => {
  return (
    <Main title="Sistemas de numeración" gridCols='1' >
      {/* <ASection title="Sección 1" text="contenido de la sección... anda o no anda?" /> */}
      <Tabs />
    </Main>
  )
}

export default UnitOne