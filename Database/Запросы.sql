--Открытие анкеты кандидата
SELECT pi.Surname, pi.First_Name, pi.Middle_Name, pi.Age, pi.Sex, pi.Mail, pi.Phone_Number,
pi.Birthday, pi.Сitizenship, pi.Loc,h.Full_Name, s.Status, GROUP_CONCAT(DISTINCT sk.Skills ),
r.Link, GROUP_CONCAT(DISTINCT r.Experience), r.About, r.Salary, GROUP_CONCAT(DISTINCT e.Year_Graduation),
GROUP_CONCAT(DISTINCT e.Education), GROUP_CONCAT(DISTINCT e.University),GROUP_CONCAT(DISTINCT e.Specialty),GROUP_CONCAT(DISTINCT sc.Employment),
GROUP_CONCAT(DISTINCT js.Job_Site_Link), GROUP_CONCAT(DISTINCT lw.Date_duration),GROUP_CONCAT(DISTINCT lw.Company), GROUP_CONCAT(DISTINCT lw.Job_Title)
FROM Personal_Information pi
JOIN Resume r ON r.Id_Pers_Inf = pi.Id_Personal_Information
JOIN HR h ON h.Id_Human_Resources = r.Id_HR
JOIN Status s ON s.Id_Status = r.Id_Stat
JOIN InfSkill isk ON isk.Id_Pers_Inf = pi.Id_Personal_Information
JOIN Skills sk ON sk.Id_Skills = isk.Id_Skill
JOIN InfEdu ied ON ied.Id_Pers_Inf = pi.Id_Personal_Information
JOIN Education e ON e.Id_education = ied.Id_Edu
JOIN ResSch rs ON rs.Id_Res = r.Id_Resume
JOIN Schedule sc ON sc.Id_Employment = rs.Id_Sch
JOIN Job_Site js ON js.Id_Res = r.Id_Resume
JOIN ResEmp re ON re.Id_Res = r.Id_Resume
JOIN Employment empl ON empl.Id_Employment = re.Id_Emp
JOIN ResJob rj ON rj.Id_Res = r.Id_Resume
JOIN JobTitle jt ON jt.Id_Job_Title = rj.Id_Job
JOIN Last_Work lw ON lw.Id_Res = r.Id_Resume
WHERE r.Id_Resume='1'
GROUP BY r.Id_Resume;


--Фильтр по имени
SELECT pi.Surname, pi.First_Name,  pi.Mail, pi.Phone_Number,
s.Status, GROUP_CONCAT(DISTINCT sk.Skills ), GROUP_CONCAT(DISTINCT lw.Job_Title)
FROM Personal_Information pi
JOIN InfSkill isk ON isk.Id_Pers_Inf = pi.Id_Personal_Information
JOIN Resume r ON r.Id_Pers_Inf = pi.Id_Personal_Information
JOIN Status s ON s.Id_Status = r.Id_Stat
JOIN Skills sk ON sk.Id_Skills = isk.Id_Skill
JOIN Last_Work lw ON lw.Id_Res = r.Id_Resume
WHERE pi.First_Name='Елена'
GROUP BY r.Id_Resume;

--Фильтр по фамилии
SELECT pi.Surname, pi.First_Name,  pi.Mail, pi.Phone_Number,
s.Status, GROUP_CONCAT(DISTINCT sk.Skills ), GROUP_CONCAT(DISTINCT lw.Job_Title)
FROM Personal_Information pi
JOIN InfSkill isk ON isk.Id_Pers_Inf = pi.Id_Personal_Information
JOIN Resume r ON r.Id_Pers_Inf = pi.Id_Personal_Information
JOIN Status s ON s.Id_Status = r.Id_Stat
JOIN Skills sk ON sk.Id_Skills = isk.Id_Skill
JOIN Last_Work lw ON lw.Id_Res = r.Id_Resume
WHERE pi.Surname='Оборина'
GROUP BY r.Id_Resume;

--Фильтр по отчеству
SELECT pi.Surname, pi.First_Name,  pi.Mail, pi.Phone_Number,
s.Status, GROUP_CONCAT(DISTINCT sk.Skills ), GROUP_CONCAT(DISTINCT lw.Job_Title)
FROM Personal_Information pi
JOIN InfSkill isk ON isk.Id_Pers_Inf = pi.Id_Personal_Information
JOIN Resume r ON r.Id_Pers_Inf = pi.Id_Personal_Information
JOIN Status s ON s.Id_Status = r.Id_Stat
JOIN Skills sk ON sk.Id_Skills = isk.Id_Skill
JOIN Last_Work lw ON lw.Id_Res = r.Id_Resume
WHERE pi.Middle_Name='Константиновна'
GROUP BY r.Id_Resume;

--Фильтр по должности
SELECT pi.Surname, pi.First_Name,  pi.Mail, pi.Phone_Number,
s.Status, GROUP_CONCAT(DISTINCT sk.Skills ), GROUP_CONCAT(DISTINCT lw.Job_Title)
FROM Personal_Information pi
JOIN InfSkill isk ON isk.Id_Pers_Inf = pi.Id_Personal_Information
JOIN Resume r ON r.Id_Pers_Inf = pi.Id_Personal_Information
JOIN ResJob rj ON rj.Id_Res = r.Id_Resume
JOIN Status s ON s.Id_Status = r.Id_Stat
JOIN Skills sk ON sk.Id_Skills = isk.Id_Skill
JOIN Last_Work lw ON lw.Id_Res = r.Id_Resume
WHERE rj.Id_Job='1'
GROUP BY r.Id_Resume;

--Фильтр по должности если она не одна
SELECT pi.Surname, pi.First_Name,  pi.Mail, pi.Phone_Number,
s.Status, GROUP_CONCAT(DISTINCT sk.Skills ), GROUP_CONCAT(DISTINCT lw.Job_Title)
FROM Personal_Information pi
JOIN InfSkill isk ON isk.Id_Pers_Inf = pi.Id_Personal_Information
JOIN Resume r ON r.Id_Pers_Inf = pi.Id_Personal_Information
JOIN ResJob rj ON rj.Id_Res = r.Id_Resume
JOIN Status s ON s.Id_Status = r.Id_Stat
JOIN Skills sk ON sk.Id_Skills = isk.Id_Skill
JOIN Last_Work lw ON lw.Id_Res = r.Id_Resume
WHERE (rj.Id_Job='1' OR rj.Id_Job='2')
GROUP BY r.Id_Resume;

--Фильтр по дате рождения
SELECT pi.Surname, pi.First_Name,  pi.Mail, pi.Phone_Number,
s.Status, GROUP_CONCAT(DISTINCT sk.Skills ), GROUP_CONCAT(DISTINCT lw.Job_Title)
FROM Personal_Information pi
JOIN InfSkill isk ON isk.Id_Pers_Inf = pi.Id_Personal_Information
JOIN Resume r ON r.Id_Pers_Inf = pi.Id_Personal_Information
JOIN Status s ON s.Id_Status = r.Id_Stat
JOIN Skills sk ON sk.Id_Skills = isk.Id_Skill
JOIN Last_Work lw ON lw.Id_Res = r.Id_Resume
WHERE pi.Birthday BETWEEN '01.01.2000' AND '04.07.2002'
GROUP BY r.Id_Resume;

--Фильтр по полу
SELECT pi.Surname, pi.First_Name,  pi.Mail, pi.Phone_Number,
s.Status, GROUP_CONCAT(DISTINCT sk.Skills ), GROUP_CONCAT(DISTINCT lw.Job_Title)
FROM Personal_Information pi
JOIN InfSkill isk ON isk.Id_Pers_Inf = pi.Id_Personal_Information
JOIN Resume r ON r.Id_Pers_Inf = pi.Id_Personal_Information
JOIN Status s ON s.Id_Status = r.Id_Stat
JOIN Skills sk ON sk.Id_Skills = isk.Id_Skill
JOIN Last_Work lw ON lw.Id_Res = r.Id_Resume
WHERE pi.Sex='Женский'
GROUP BY r.Id_Resume;

--Фильтр по городу
SELECT pi.Surname, pi.First_Name,  pi.Mail, pi.Phone_Number,
s.Status, GROUP_CONCAT(DISTINCT sk.Skills ), GROUP_CONCAT(DISTINCT lw.Job_Title)
FROM Personal_Information pi
JOIN InfSkill isk ON isk.Id_Pers_Inf = pi.Id_Personal_Information
JOIN Resume r ON r.Id_Pers_Inf = pi.Id_Personal_Information
JOIN Status s ON s.Id_Status = r.Id_Stat
JOIN Skills sk ON sk.Id_Skills = isk.Id_Skill
JOIN Last_Work lw ON lw.Id_Res = r.Id_Resume
WHERE pi.Loc='Пермь'
GROUP BY r.Id_Resume;

--Фильтр по университету
SELECT pi.Surname, pi.First_Name,  pi.Mail, pi.Phone_Number,
s.Status, GROUP_CONCAT(DISTINCT sk.Skills ), GROUP_CONCAT(DISTINCT lw.Job_Title)
FROM Personal_Information pi
JOIN InfSkill isk ON isk.Id_Pers_Inf = pi.Id_Personal_Information
JOIN Resume r ON r.Id_Pers_Inf = pi.Id_Personal_Information
JOIN Status s ON s.Id_Status = r.Id_Stat
JOIN Skills sk ON sk.Id_Skills = isk.Id_Skill
JOIN Last_Work lw ON lw.Id_Res = r.Id_Resume
JOIN InfEdu ied ON ied.Id_Pers_Inf = pi.Id_Personal_Information
JOIN Education e ON e.Id_education = ied.Id_Edu
WHERE ied.Id_Edu='1'
GROUP BY r.Id_Resume;

--Фильтр по статусу
SELECT pi.Surname, pi.First_Name,  pi.Mail, pi.Phone_Number,
s.Status, GROUP_CONCAT(DISTINCT sk.Skills ), GROUP_CONCAT(DISTINCT lw.Job_Title)
FROM Personal_Information pi
JOIN InfSkill isk ON isk.Id_Pers_Inf = pi.Id_Personal_Information
JOIN Resume r ON r.Id_Pers_Inf = pi.Id_Personal_Information
JOIN Status s ON s.Id_Status = r.Id_Stat
JOIN Skills sk ON sk.Id_Skills = isk.Id_Skill
JOIN Last_Work lw ON lw.Id_Res = r.Id_Resume
WHERE s.Status='Статус'
GROUP BY r.Id_Resume;
