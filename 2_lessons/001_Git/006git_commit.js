Коммит файлов 

	$ git commit -m "my commit"
	$ git commit -am "my commit"

Просмотр истории коммитов
	$ git log
	$ git log --stat --graph
	$ git show `sha256`

Просмотр изменений строчек кода 
	$ git blame filename

Визуальный просмотр логов 
	$ gitk - требует установки Linux
	$ git gui - требует установки Windows

Изменение последнего коммита
	$ git commit -m 'initial commit'
	$ git add forgotten_file
	$ git commit --amend
