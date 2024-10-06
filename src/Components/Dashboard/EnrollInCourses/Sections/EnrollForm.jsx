const EnrollmentForm = ({
  formData,
  setFormData,
  handleSubmit,
  formErrors,
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-emerald"
        >
          Name:
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full border rounded p-2"
        />
        {formErrors.name && (
          <p className="text-red text-sm">{formErrors.name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-emerald"
        >
          Email:
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full border rounded p-2"
        />
        {formErrors.email && (
          <p className="text-red text-sm">{formErrors.email}</p>
        )}
      </div>

      {/* Phone Number */}
      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-semibold text-emerald"
        >
          Phone Number:
        </label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full border rounded p-2"
        />
        {formErrors.phone && (
          <p className="text-red text-sm">{formErrors.phone}</p>
        )}
      </div>

      {/* Semester */}
      <div>
        <label
          htmlFor="semester"
          className="block text-sm font-semibold text-emerald"
        >
          Semester:
        </label>
        <input
          type="text"
          name="semester"
          value={formData.semester}
          onChange={(e) =>
            setFormData({ ...formData, semester: e.target.value })
          }
          className="w-full border rounded p-2"
        />
        {formErrors.semester && (
          <p className="text-red text-sm">{formErrors.semester}</p>
        )}
      </div>

      {/* Batch Number */}
      <div>
        <label
          htmlFor="batchNumber"
          className="block text-sm font-semibold text-emerald"
        >
          Batch Number:
        </label>
        <input
          type="text"
          name="batchNumber"
          value={formData.batchNumber}
          onChange={(e) =>
            setFormData({ ...formData, batchNumber: e.target.value })
          }
          className="w-full border rounded p-2"
        />
        {formErrors.batchNumber && (
          <p className="text-red text-sm">{formErrors.batchNumber}</p>
        )}
      </div>

      {/* Session */}
      <div>
        <label
          htmlFor="session"
          className="block text-sm font-semibold text-emerald"
        >
          Session:
        </label>
        <input
          type="text"
          name="session"
          value={formData.session}
          onChange={(e) =>
            setFormData({ ...formData, session: e.target.value })
          }
          className="w-full border rounded p-2"
        />
        {formErrors.session && (
          <p className="text-red text-sm">{formErrors.session}</p>
        )}
      </div>

      {/* Preferred Start Date */}
      <div>
        <label
          htmlFor="startDate"
          className="block text-sm font-semibold text-emerald"
        >
          Preferred Start Date:
        </label>
        <input
          type="date"
          name="startDate"
          value={formData.startDate}
          onChange={(e) =>
            setFormData({ ...formData, startDate: e.target.value })
          }
          className="w-full border rounded p-2"
        />
        {formErrors.startDate && (
          <p className="text-red text-sm">{formErrors.startDate}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-emerald text-white p-2 rounded w-full mt-4"
      >
        Enroll
      </button>
    </form>
  );
};

export default EnrollmentForm;
