--Таблица личная информация
create table Personal_Information(
    Id_Personal_Information bigserial primary key,--Id личной информации для связи таблиц
    Surname text,--Фамилия
    First_Name text,--Имя
    Middle_Name text,--Отчество
    Age integer--Возраст
        check ( age > 0 ),
    Sex text not null,--Пол
    Mail text,--Почта
    Phone_Number text,--Телефон
    Birthday date,--Дата рождения
    Сitizenship text,--Гражданство
    Loc text--Место жительства
);
--Таблица навыков
create table Skills(
    Id_Skills bigserial primary key ,--Id навыков для связи таблиц
    Skills text--Навык
);
--Таблица связи личной информации и навыков
create table InfSkill
(
    Id_InfSkill bigserial primary key ,--Id личной информации и навыков
    Id_Pers_Inf bigserial not null constraint Personal_Information_ID_fk references Personal_Information on update cascade on delete cascade,--Id связь с личной информацией
    Id_Skill bigserial not null constraint Skills_ID_fk references Skills on update cascade on delete cascade--Id связь с навыками
);
--Таблица образования
create table Education(
  Id_education  bigserial primary key ,--Id образования для связи таблиц
  Year_Graduation text,--Год окончания
  Education text,--Поля для уровня образования нет/курсы/высшее и тд
  University text,--Университет/учебное заведение
  Specialty text--Направление
);
--Таблица связи личной информации и образования
create table InfEdu(
    Id_InfEdu bigserial primary key ,--Id личной информации и образования
    Id_Pers_Inf bigserial not null constraint Personal_Information_ID_fk references Personal_Information on update cascade on delete cascade,--Id связь с личной информацией
    Id_Edu bigserial not null constraint Education_ID_fk references Education on update cascade on delete cascade--Id связь с образование
);
--Таблица рекрутеров
create table HR(
     Id_Human_Resources bigserial primary key ,--Id HR для связи таблиц
     Full_Name text not null--Полное имя рекрутера
);
--Таблица статуса
create table Status(
    Id_Status bigserial primary key ,--Id статуса для связи таблиц
    Status text not null unique--Статус
);
--Таблица резюме
create table Resume(
    Id_Resume bigserial primary key ,--Id резюме для связи таблиц
    Id_Pers_Inf bigserial not null constraint Personal_Information_ID_fk references Personal_Information on update cascade on delete cascade,--Id связь с личной информацией
    Id_HR bigserial not null constraint HR_ID_fk references HR on update cascade on delete cascade,--Свзь с таблицей HR
    Id_Stat bigserial not null constraint Status_ID_fk references Status on update cascade on delete cascade,--Связь с таблицей статуса
    Link text not null unique,--Ссылка на резюме
    Experience text,--Опыт работы
    About text,--Обо мне
    Salary integer--Желаемая ЗП
        check ( Salary > 0 )
);
--Таблица для предыдущей работы
create table Last_Work(
    Id_Last_Work bigserial primary key ,--Id мест работы для связи таблиц
    Id_Res bigserial not null constraint Resume_ID_fk references Resume on update cascade on delete cascade,--Id связь с резюме
    Date_duration text,--дата работы
    Company text,--Название компании
    Job_Title text--Должность
);
--Таблица занятости
create table Employment(
    Id_Employment bigserial primary key ,--Id занятости для связи таблиц
    Employment text--Занятость
);
--Таблица связи резюме и занятости
create table ResEmp(
    Id_ResEmp bigserial primary key ,--Id резюме и занятости
    Id_Res bigserial not null constraint Resume_ID_fk references Resume on update cascade on delete cascade,--Id связь с резюме
    Id_Emp bigserial not null constraint Employment_ID_fk references Employment on update cascade on delete cascade--Id связь с занятостью
);
--Таблица График работы
create table Schedule(
    Id_Employment bigserial primary key ,--Id занятости для связи таблиц
    Employment text--График работы
);
--Таблица связи резюме и графика работы
create table ResSch(
    Id_ResSch bigserial primary key ,--Id резюме и графика работы
    Id_Res bigserial not null constraint Resume_ID_fk references Resume on update cascade on delete cascade,--Id связь с резюме
    Id_Sch bigserial not null constraint Schedule_ID_fk references Schedule on update cascade on delete cascade--Id связь с График работы
);
--Таблица желаемой должности
create table JobTitle(
    Id_Job_Title bigserial primary key ,--Id должности для связи таблиц
    Job_Title text--должность
);
--Таблица связи резюме и должности
create table ResJob(
   Id_ResJob bigserial primary key ,--Id резюме и должности
   Id_Res bigserial not null constraint Resume_ID_fk references Resume on update cascade on delete cascade,--Id связь с резюме
   Id_Job bigserial not null constraint JobTitle_ID_fk references JobTitle on update cascade on delete cascade--Id связь с должность
);
--Таблица job сайтов
create table Job_Site(
    Id_Job_Site bigserial primary key ,--Id job сайтов для связи таблиц
    Id_Res bigserial not null constraint Resume_ID_fk references Resume on update cascade on delete cascade,--Id связь с резюме
    Job_Site_Link text--Ссылка на job сайт
);


--Очистка
drop table Job_Site;
drop table ResJob;
drop table JobTitle;
drop table ResEmp;
drop table Employment;
drop table ResSch;
drop table Schedule;
drop table InfEdu;
drop table Education;
drop table InfSkill;
drop table Skills;
drop table Last_Work;
drop table Resume;
drop table Status;
drop table HR;
drop table Personal_Information;
