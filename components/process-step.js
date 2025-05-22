export default function ProcessStep({ number, title, description }) {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 bg-green-500 text-white font-bold text-xl w-12 h-12 rounded-full flex items-center justify-center">
        {number}
      </div>
      <div className="ml-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}
