import { ChangeEvent, useEffect, useState } from 'react';

type InputProps = {
  setDesiredOunces: React.Dispatch<React.SetStateAction<number>>;
};

export default function Input({ setDesiredOunces }: InputProps) {
  const [ounces, setOunces] = useState<number>(0);

  // send desired ounces back to App.tsx
  useEffect(() => {
    setDesiredOunces(ounces);
  }, [ounces]);

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setOunces(e.target.valueAsNumber);
  }

  return (
    <div>
      <label
        htmlFor="ounces"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Ounces
      </label>
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="number"
          name="ounces"
          min="0"
          max="128"
          id="ounces"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={ounces}
          onChange={(e) => onChange(e)}
        />
      </div>
    </div>
  );
}
