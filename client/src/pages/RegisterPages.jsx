
const RegisterPages = () => {
  return (
    <>
        < form>
            <input type="text" name="name" />
            <input type="number" name="age" min={0} max={6}/>
            <input type="email" name="email"/>
            <input type="password" name="password"/>

        </form>
    </>
  )
}

export default RegisterPages