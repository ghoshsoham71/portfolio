import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAws } from "@fortawesome/free-brands-svg-icons";

const techIcons = [
  { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Java', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'FastAPI', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'AWS', icon: faAws },
  { name: 'Linux', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'LangChain', src: '/icons/langchain.svg' },      
  { name: 'Kubernetes', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Jenkins', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg' },
  { name: 'Ansible', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg' },
  { name: 'Terraform', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' }, 
  { name: 'Neo4J', src: '/icons/neo4j.svg' },          
];

const longIconList = Array(20).fill(techIcons).flat();

const StreamingIcons = () => {
  return (
    <div className="relative w-full h-20 overflow-hidden bg-inherit">
      <div className="flex animate-infinite-scroll w-max space-x-10 px-10 items-center">
        {longIconList.map((icon, index) => (
          icon.icon ? (
            <FontAwesomeIcon
              key={index}
              icon={icon.icon}
              title={icon.name}
              className="text-white text-4xl"
            />
          ) : (
            <img
              key={index}
              src={icon.src}
              alt={icon.name}
              title={icon.name}
              className="h-8 w-8 object-contain"
            />
          )
        ))}
      </div>
    </div>
  );
};

export default StreamingIcons;
