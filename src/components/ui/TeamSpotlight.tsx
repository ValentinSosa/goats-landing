import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin?: string;
  github?: string;
}

interface TeamSpotlightProps {
  members: TeamMember[];
}

export const TeamSpotlight: React.FC<TeamSpotlightProps> = ({ members }) => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {members.map((member) => (
          <motion.div
            key={member.id}
            className={`bg-white p-6 rounded-xl shadow-md text-center cursor-pointer transition-all duration-300 relative ${
              activeId !== null && activeId !== member.id
                ? 'opacity-50 scale-95'
                : 'opacity-100'
            }`}
            onClick={() => setActiveId(activeId === member.id ? null : member.id)}
            whileHover={{ 
              y: -5, 
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' 
            }}
            layout
          >
            <motion.img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-blue-200"
              layoutId={`image-${member.id}`}
            />
            <motion.h3 
              className="text-xl font-semibold" 
              layoutId={`name-${member.id}`}
            >
              {member.name}
            </motion.h3>
            <motion.p 
              className="text-gray-600 mt-2" 
              layoutId={`role-${member.id}`}
            >
              {member.role}
            </motion.p>
            
            <AnimatePresence>
              {activeId === member.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 overflow-hidden"
                >
                  <p className="text-gray-700">{member.bio}</p>
                  <div className="mt-4 flex justify-center space-x-3">
                      {member.linkedin && (
                        <motion.a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm"
                        >
                          Contactar
                        </motion.a>
                      )}
                      {member.github && (
                        <motion.a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md text-sm"
                        >
                          Ver proyectos
                        </motion.a>
                      )}
                    </div>

                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
      
      <AnimatePresence>
        {activeId !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // className="fixed inset-0 bg-black bg-opacity-40 z-0"
            onClick={() => setActiveId(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};