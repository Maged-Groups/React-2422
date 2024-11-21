import Button from "../components/Button"

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white p-4 sticky bottom-0 left-0 w-full flex justify-between">
      <div className="w-3/12">
        1
      </div>

      <div className="w-3/12">
        2
      </div>


      <div className="w-6/12 flex justify-end">
        <Button tw='text-red-500 flex gap-1'>
          <span className="text-white">Contacts</span>
          <span className="font-bold text-red-400">US</span>
        </Button>
      </div>
    </footer>
  )
}

export default Footer