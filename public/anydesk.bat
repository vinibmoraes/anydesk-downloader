@echo off
title Instalando AnyDesk...
echo Baixando AnyDesk, aguarde...

:: Faz o download do AnyDesk para a pasta TEMP
powershell -Command "& {Invoke-WebRequest -Uri 'https://download.anydesk.com/AnyDesk.exe' -OutFile '%TEMP%\AnyDesk.exe'}"

:: echo Instalando AnyDesk...
:: Executa a instalação silenciosa
start /wait %TEMP%\AnyDesk.exe --install

:: echo Criando atalho na área de trabalho...
:: Cria um atalho do AnyDesk na área de trabalho do usuário
powershell -Command "$s=(New-Object -COM WScript.Shell).CreateShortcut('%USERPROFILE%\Desktop\AnyDesk.lnk'); $s.TargetPath='C:\Program Files\AnyDesk\AnyDesk.exe'; $s.Save()"

:: echo Verificando local do AnyDesk...
:: Verifica onde o AnyDesk foi instalado e abre
if exist "C:\Program Files (x86)\AnyDesk\AnyDesk.exe" (
    start "" "C:\Program Files (x86)\AnyDesk\AnyDesk.exe"
) else if exist "C:\Program Files\AnyDesk\AnyDesk.exe" (
    start "" "C:\Program Files\AnyDesk\AnyDesk.exe"
) else (
    :: echo AnyDesk não foi encontrado no caminho padrão. Abrindo versão portátil...
    start "" "%TEMP%\AnyDesk.exe"
)

:: echo AnyDesk instalado e aberto com sucesso!
:: pause
exit
