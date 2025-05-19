import "./style.css";
import { useState, useEffect, useRef } from "react";

interface DropdownProps {
  placeholder: string;
  options: { value: string; label: string }[];
  onSelect: (value: string) => void;
  rewrite?: boolean;
}

const Dropdown = ({ placeholder, options, onSelect, rewrite = true }: DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (value: string, label: string) => {
    setSelectedOption(label);
    onSelect(value);
    setIsOpen(false);
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (rewrite) setSelectedOption("");
  }, [options]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        console.log("Click outside");
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={`bootstrap-select ${isOpen ? "open" : ""}`}
      data-required="true"
      aria-disabled={options.length === 0}
    >
      <div
        className="dropdown-toggle"
        role="button"
        aria-expanded={isOpen}
        aria-controls="dropdown-menu"
        onClick={toggleDropdown}
      >
        <span className="filter-option pull-left">
          {selectedOption && selectedOption !== "" ? selectedOption : placeholder}
        </span>
      </div>
      {isOpen && (
        <ul className="dropdown-menu" id="dropdown-menu">
          {options.map((option) => (
            <li
              key={option.value}
              className="dropdown-item"
              data-value={option.value}
              onClick={() => {
                handleSelect(option.value, option.label);
                setIsOpen(false);
              }}
            >
              <a>
                <span className="text">{option.label}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;