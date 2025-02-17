
interface GenderCheckboxProps {
    selectedGender : string,
    onCheckboxChange: (gender: "male" | "female") => void
}

const GenderCheckbox: React.FC<GenderCheckboxProps> = ({selectedGender, onCheckboxChange}) => {
  return (
    <div className='flex gap-5'>
        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='font-medium text-gray-900'>Male</span>
                <input 
                    type='checkbox'
                    className='checkbox border-slate-900'
                    checked={selectedGender === 'male'}
                    onChange={() => onCheckboxChange("male")}
                />
            </label>
        </div>

        <div className='form-control'>
            <label className={`label gap-2 cursor-pointer`}>
                <span className='font-medium text-gray-900'>Female</span>
                <input 
                    type='checkbox'
                    className='checkbox border-slate-900'
                    checked={selectedGender === 'female'}
                    onChange={() => onCheckboxChange("female")}
                />
            </label>
        </div>
    </div>
  )
}

export default GenderCheckbox;