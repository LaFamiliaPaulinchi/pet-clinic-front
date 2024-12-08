import React, { useState } from "react";
import { Guardian } from "../../types";
import { Edit2, Eye, Trash2, UserPlus } from "lucide-react";
import GuardianForm from "./GuardianForm";
import { Link } from "react-router-dom";

interface GuardianListProps {
  guardians: Guardian[];
  onAdd: (guardian: Omit<Guardian, "id">) => void;
  onUpdate: (id: string, guardian: Partial<Guardian>) => void;
  onDelete: (id: string) => void;
}

const GuardianList: React.FC<GuardianListProps> = ({
  guardians,
  onAdd,
  onUpdate,
  onDelete,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [editingGuardian, setEditingGuardian] = useState<Guardian | null>(null);

  const handleEdit = (guardian: Guardian) => {
    setEditingGuardian(guardian);
    setShowForm(true);
  };

  const handleSubmit = (guardianData: Omit<Guardian, "id">) => {
    if (editingGuardian) {
      onUpdate(editingGuardian.id, guardianData);
    } else {
      onAdd(guardianData);
    }
    setShowForm(false);
    setEditingGuardian(null);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingGuardian(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Guardian Management</h2>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          <UserPlus className="h-5 w-5" />
          Add Guardian
        </button>
      </div>

      <div className="grid gap-4">
        {guardians.map((guardian) => (
          <div
            key={guardian.id}
            className="bg-white rounded-lg shadow p-4 flex items-center justify-between"
          >
            <div>
              <h3 className="font-semibold">{guardian.name}</h3>
              <p className="text-sm text-gray-600">{guardian.email}</p>
              <p className="text-sm text-gray-600">{guardian.phone}</p>
            </div>
            <div className="flex gap-2">
              <Link
                to={`/guardians/${guardian.id}`}
                className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-blue-50"
              >
                <Eye className="h-5 w-5" />
              </Link>
              <button
                onClick={() => handleEdit(guardian)}
                className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-blue-50"
              >
                <Edit2 className="h-5 w-5" />
              </button>
              <button
                onClick={() => onDelete(guardian.id)}
                className="p-2 text-gray-600 hover:text-red-600 rounded-full hover:bg-red-50"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <GuardianForm
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          initialData={editingGuardian || undefined}
        />
      )}
    </div>
  );
};

export default GuardianList;
