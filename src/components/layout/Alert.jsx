import React, { useContext } from "react"
import AlertContext from "../../context/alert/AlertContext"
import { MdError } from "react-icons/md"

function Alert() {
  const { alert } = useContext(AlertContext)

  return (
    alert !== null && (
      <div className="flex items-start mb-4 space-x-2">
        {alert.type === "error" && (
          <p>
            <MdError className="text-3xl" />
          </p>
        )}        
        <p className="flex-1 text-2xl leading-7 text-red-400">
          <strong>{alert.msg}</strong>
        </p>
      </div>
    )
  )
}

export default Alert;
