 DataTable.AddSheet "sign_in_test_data_provided_by_shilpa"
 
DataTable.ImportSheet"C:\Users\SHCHATTI\Downloads\pravin_parameterization_example (4).xlsx","sign_in_test_me_app",3

number_of_records=DataTable.GetSheet("sign_in_test_data_provided_by_shilpa").GetRowCount
msgbox number_of_records
For i=1 to number_of_records step 1

DataTable.getSheet(3).SetCurrentRow(i)
username=DataTable.Value("username",3)
password=DataTable.Value("password",3)
msgbox username
msgbox password

SystemUtil.Run "C:\Program Files (x86)\Micro Focus\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"
'C:\Program Files\HPE\Unified Functional Testing\samples\Flights Application

'C:\Program Files\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe
WpfWindow("devname:=HPE MyFlight Sample Application").WpfEdit("devname:=agentName").Set username
WpfWindow("devname:=HPE MyFlight Sample Application").WpfEdit("devname:=password").SetSecure password
'WpfWindow("devname:=HPE MyFlight Sample Application").WpfButton("name:=OK").Click
WpfWindow("devname:=HPE MyFlight Sample Application").WpfButton("text:=Cancel").Click
wait(3)


'Browser("Home").Page("Home").Link("SignOut").Click
'wait(4)

'Browser("Home").CloseAllTabs
next
