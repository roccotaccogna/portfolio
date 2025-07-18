function Loading() {
  return (
    <div className="flex-col gap-4 w-full flex items-center justify-center mt-64">
        <div
            className="w-48 h-48 border-4 border-transparent text-neutral-500 text-4xl 
                       animate-spin flex items-center justify-center border-t-neutral-500 rounded-full"
        >
            <div
            className="w-44 h-44 border-4 border-transparent text-teal-500 text-2xl 
                       animate-spin flex items-center justify-center border-t-teal-500 rounded-full"
            ></div>
        </div>
    </div>
  )
}

export default Loading;