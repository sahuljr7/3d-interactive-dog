import DogScene from '../components/DogScene'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">3D Interactive Dog</h1>
      <p className="text-lg mb-8">Use your mouse or touch to rotate and zoom. Watch the tail wag!</p>
      <div className="w-full max-w-3xl aspect-square">
        <DogScene />
      </div>
    </main>
  )
}

