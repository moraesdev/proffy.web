import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import api from '../../services/api';

import './styles.css';
import Select from '../../components/Select';



function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState('');
  const [wek_day, setWekDay] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

   const response = await api.get('classes', {
      params: {
        subject,
        wek_day,
        time
      }
    });

    setTeachers(response.data);
  }

  return(
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis">
        <form id="search-teachers" onSubmit={searchTeachers}>
        <Select 
            name="subject" 
            label="Matéria"
            value={subject}
            onChange={e => { setSubject(e.target.value)}}
            options={[
              {value: 'Artes', label: 'Artes'},
              {value: 'Biologia', label: 'Biologia'},
              {value: 'Física', label: 'Física'},
              {value: 'História', label: 'História'},
              {value: 'Português', label: 'Português'},
              {value: 'Ciências', label: 'Ciências'},
            ]}
          />
          <Select 
            name="wek_day" 
            label="Dias da semana"
            value={wek_day}
            onChange={e => { setWekDay(e.target.value)}}
            options={[
              {value: '0', label: 'Domingo'},
              {value: '1', label: 'Segunda-feira'},
              {value: '2', label: 'Terça-feira'},
              {value: '3', label: 'Quarta-feira'},
              {value: '4', label: 'Quinta-feira'},
              {value: '5', label: 'Sexta-feira'},
              {value: '6', label: 'Sábado'},
            ]}
          />
          <Input 
            name="time" 
            type="time"
            label="Hora" 
            value={time}
            onChange={e => { setTime(e.target.value)}}
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  )
}

export default TeacherList;