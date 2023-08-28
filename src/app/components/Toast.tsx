export function Toast({ message, show }) {
    return (
      <div className={`fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded ${show ? 'block' : 'hidden'}`}>
        {message}
      </div>
    );
  }
  