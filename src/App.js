import Random from './components/Random';
import Tag from './components/Tag';

export default function App() {
  return (
    <div className='w-full min-h-screen flex flex-col background relative overflow-x-hidden items-center px-4 sm:px-6 md:px-8'>
      <h1 className='bg-white rounded-lg text-center mt-10 px-6 py-3 text-2xl sm:text-3xl md:text-4xl w-full max-w-xl font-bold'>
        Random GIFs
      </h1>

      <div className='flex flex-col w-full items-center gap-y-6 mt-8 sm:mt-12'>
        <Random />
        <Tag />
      </div>
    </div>
  );
}
