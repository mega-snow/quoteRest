/**
 * @function getLangs
 *
 * This function sets up Globalite internal
 * languages objects (translations). To add new language just
 * call Globalite.language once again with one more language
 * descriptor.
 * Please do not redefine language with the same descriptor.
 *
 * To add new translation item just add it to all of languages
 * objects as a field
 *
 * Item`s text can contain any unicode char and valid HTML tags
 */

 define(['jquery', 'globalite'], function($, Globalite){

var getLangs = function() {
	Globalite.language("en", {
	RESPONSE_CODE_badRequest : 'bad request',
        RESPONSE_CODE_applicationError:'Application error',
        RESPONSE_CODE_serverError:'Internal server error',
        RESPONSE_CODE_authError:'Auth error',
	uploadButtonName : 'Upload file',
        uploadInfo      : 'You can attach files with extentions: {0}, and size lesser than {1} MB. The file will be automatically deleted after 7 days.',
        successUpload    : 'Success',
        successError    :  'Error',
        ticketSuccess	:  'Request has accepted. Request number {0}',
        delActiveTicketTitle:'Cancel active request',
        activeLink_delActiveTicketCaption:'You already have an active request № {0}. Cancel request.',
        activeLink_commnetTicket:'Add comment',
        activeLink_CloseTicketSuccess:'Your active request has been cancelled. You can now proceed with your draft request.',
        activeLink_Resume:'Continue draft request',
        activeLink_Close:'Cancel request',
        activeLink_CloseDraft:'Close draft request',

        invalidFormat:'Invalid format',
        captionNumberTicket:'ID:',
        captionNewTicket:'Write new request',
        captionStatusTicket:'Status:',
        captionStatusAll:'- All -',
        captionStatusActive:'Not responded',
        captionStatusClosed:'Responded',
        captionStatusProcessing:'Accepted',
        captionStatusDraft:'Draft',
        captionButtonFind:'Find',
        captionPeriod:'Count of days:',
        linkTitle_CloseAndResume:"Close and resume",
        linkTitle_Processing:"Processing",
        linkTitle_View:"View",
        dataTable_Number:"Number",
        dataTable_Date:"Date/Time",
        dataTable_Type:"Type",
        dataTable_Theme:"Theme",
        dataTable_Status:"Status",
        dataTable_Action:"",
        filterTicketErrorMessage:"Form field validation error",
        captionCommentHistory:"History",
        captionQuestion:"Question",
        captionUploadFile:"Attach file",
        captionBtnComment:"Send",
        captionHideComment:"Hide comment",
        captionSendForm:"Send",
        ok:"Ok",

        

        commentsTable_Date      :"Date/time",
        commentsTable_Author    :"Author",
        commentsTable_Message   :"Message",
        commentsTable_File      :"Files",
        dataTable_PreviousPage  :"<<",
        dataTable_NextPage      :">>",
        ACTION_VIEW             :"Details",
        ACTION_CLOSE_AND_RESUME :"Close and resume",
        ACTION_NONE             :"none",
        ACTION_TO_DRAFT         :"To Draft",

        closeAndResume_Caption  :"Active ticket exist", 
        closeAndResume_Text     :"Cancel active request and resume draft", 
        closeAndResume_msgSuccess:"",
        closed:"Closed",
        draft:"Draft",
        active:"Not responded",
        processing:"Processing",
        CANCELLED:"(Cancelled)",
        DONE:"(Done)",
        ALLOWED:"(Allowed)",
        CHECKED:"",
        PROCESSING:"",
        requiredField:"Required field",

        errorFormValidation:"Form validation error",
        sectionIsNotSelected:" - Section is not selected - ",
        loading:"Loading ...",

        //fieldFileUpload_InvalidExtension:"Неверный тип файла. Файл должен иметь расширение: {0}",
        errorUpload:"Uploading error",
        errorUpload_extension:"{0} Incorrect file type. You can attach files with extentions: {1}",
        errorUpload_size:"{0} File is too large",


        filter_Period_validationError:"Value of 'Count of days' must be a whole number",        
        filter_NumberTicket_validationError:"Value of 'ID' must be a whole number",
        you:'You',
        staticBottomNotices:"<p>Dear Customers!</p><p>Bets history and balance are accessible in <a href='index.xhtml?page=operationHistory'>Statement</a></p><p>Please use «Fon-Mobile» application to place bets from <a href='http://fonbet.com/ru/mobile/'>phone</a>.</p>",
        staticBottomNotices_allRequest: "<p>You can see requests history in <a id='moveToFilter' href='#{REQUEST_TYPE}/list/'>All requests</a>.</p>",
        //</p><p>You can see requests history in <a id='moveToFilter'>All requests</a>.</p>
        nothingFound:"Nothing found.",
        titleLinkIsAccount_CardEdit:"Edit",
        titleLinkIsAccount_PhonesEdit:"Edit",
        FonbetRecommends:"Fonbet recommends",
        confirmed:"Confirmed",
        Remove:"Remove",
        Edit:"Edit",
        editNumbers:"Edit numbers",
        addNumber:"Adding numbers",
        backToDepositForm:"Return to the payment form",
        backToListPS:"backToListPS",
        backToListAccountsForm:'backToListAccountsForm',
        confirmRemoveAccount:"Are you sure you want to delete your account?",
        minimum:"minimum",
        maximum:"maximum",
        accountWillBeReplenished:"Gaming account will be replenished with",
        titleLinkPSRegister:"Registration in the payment system",
        id:"Id",
        date:"Date",
        amount:"Amount",
        status:"Status",
        currency:"Currency",
        paymentSystem:"Payment system",
        sendToTheBank:'send to the bank',

        withdrawTitle: 'Withdrawal', 
        generalTitle: 'All requests', 
        cancelButtonTitle: 'Cancel',
                
	});

	Globalite.language("ru", {
	RESPONSE_CODE_badRequest : 'Ошибка запроса',
        RESPONSE_CODE_applicationError:'Ошибка приложения',
        RESPONSE_CODE_serverError:'Ошибка сервера',
        RESPONSE_CODE_authError:'Ошибка авторизации',

	uploadButtonName : 'Загрузить файл',
        uploadInfo      : 'Вы можете загружать файлы форматов: {0}, размером, не превышающим {1} МБ. Файл будет автоматически удален через 7 дней.',
        successUpload    : 'Загружен',
        successError    :  'Ошибка загрузки',
        ticketSuccess	:  'Запрос принят. Номер запроса {0}',
        delActiveTicketTitle:'Отменить активный запрос',

        activeLink_delActiveTicketCaption:'У Вас уже есть активный запрос № {0}. Отменить активный запрос.',
        activeLink_commnetTicket:'Добавить комментарий',
        activeLink_CloseTicketSuccess: 'Активный запрос отменен. Теперь Вы можете продолжить черновик.',
        activeLink_Resume:'Продолжить черновик',
        activeLink_Close:'Закрыть запрос',
        activeLink_CloseDraft:'Закрыть черновик',

        invalidFormat:'Неверный формат',
        captionNumberTicket:'Номер запроса:',
        captionNewTicket:'Написать новый запрос',
        captionStatusTicket:'Статус:',
        captionStatusAll:'- Все -',
        captionStatusActive:'Неотвеченный',
        captionStatusClosed:'Отвеченный',
        captionStatusProcessing:'Предварительный',
        captionStatusDraft:'Черновик',
        captionButtonFind:'Найти',
        captionPeriod:'За количество дней:',
        linkTitle_CloseAndResume:"Закрыть активный запрос и продолжить заполнение черновика",
        linkTitle_Processing:"По данной теме есть запрос в просессе обработки",
        linkTitle_View:"Просмотр",
        dataTable_Number:"Номер",
        dataTable_Date:"Дата/Время",
        dataTable_Type:"Тип",
        dataTable_Theme:"Тема",
        dataTable_Status:"Статус",
        dataTable_Action:"",
        filterTicketErrorMessage:"Ошибка валидации полей формы",
        captionCommentHistory:"История переписки",
        captionQuestion:"Вопрос",
        captionUploadFile:"Прикрепить файл",
        captionBtnComment:"Отправить",
        captionHideComment:"Скрыть комментарий",
        captionSendForm:"Отправить",
        ok:"Ok",

        commentsTable_Date      :"Дата/Время",
        commentsTable_Author    :"Комментатор",
        commentsTable_Message   :"Сообщение",
        commentsTable_File      :"Файлы",
        dataTable_PreviousPage  :"<<",
        dataTable_NextPage      :">>",
        ACTION_VIEW             :"Просмотр",
        ACTION_CLOSE_AND_RESUME :"Закрыть активный запрос и продолжить черновик",
        ACTION_NONE             :"none",
        ACTION_TO_DRAFT         :"Продолжить черновик",
        closeAndResume_Caption  :"Активный запрос уже существует", 
        closeAndResume_Text     :"Закрыть активный запрос и продолжить заполнение текущего запроса", 
        closeAndResume_msgSuccess:"",
        closed:"Отвеченный",
        draft:"Черновик",
        active:"Неотвеченный",
        processing:"В обработке",
        CANCELLED:"(Отклонено)",
        DONE:"(Выплачено)",
        ALLOWED:"(Разрешено)",
        CHECKED:"",
        PROCESSING:"",
        requiredField:"Поле обязательно для заполнения",
        errorFormValidation:"Ошибка валидации полей формы",
        sectionIsNotSelected:" - Раздел не выбран - ",        
        loading:"Загрузка ...",
        //fieldFileUpload_InvalidExtension:"Неверный тип файла. Вы можете загружать файлы форматов: {0}",
        errorUpload:"Ошибка при загрузки файла",
        errorUpload_extension:"{0} Неверный формат файла. Вы можете загружать файлы форматов: {1}",
        errorUpload_size: "{0} Размер файла превышает максимально допустимый",

        filter_Period_validationError:"Значение поля 'За количество дней' должно представлять собой целое число",
        filter_NumberTicket_validationError:"Значение поля 'Номер запроса' должно представлять собой целое число",
        you:'Вы',
        staticBottomNotices:"<p>Уважаемые игроки!</p><p>Просмотр ставок и баланса осуществляется в разделе <a href='index.xhtml?page=operationHistory'>История операций</a></p><p>Для ставок с мобильного телефона просьба пользоваться <a href='http://fonbet.com/ru/mobile/'>мобильным приложением</a>.</p>",
        staticBottomNotices_allRequest: "<p>История Ваших запросов доступна в разделе <a id='moveToFilter' href='#{REQUEST_TYPE}/list/'>Все запросы</a>.</p>",
        nothingFound:"По вашему запросу ничего не найдено.",
        titleLinkIsAccount_CardEdit:"Редактировать",
        titleLinkIsAccount_PhonesEdit:"Редактировать",
        FonbetRecommends:"Fonbet рекомендует",
        confirmed:"Подтвержден",
        Remove:"Удалить",
        Edit:"Редактировать",
        editNumbers:"Редактирование номеров",
        addNumber:"Добавление номера",
        backToDepositForm:"Вернуться к платежной форме",
        backToListPS:"Вернуться к списку платежных систем",
        backToListAccountsForm:'Вернуться к списку счетов',
        confirmRemoveAccount:"Вы точно хотите удалить ваш счет?",
        minimum:"минимум",
        maximum:"максимум",
        accountWillBeReplenished:"Игровой счет пополнится на",
        titleLinkPSRegister:"Регистрация в платежной системе",
        id:"Id",
        date:"Дата",
        amount:"Сумма",
        status:"Статус",
        currency:"Валюта",
        paymentSystem:"Платежная система",
        resumeLastDraftTicket:'Продолжить последний черновик',

        withdrawStatus_allowed:'Разрешено',
        withdrawStatus_done:'Выплачено',
        withdrawStatus_cancelled:'Отклонено',

        statusClosed_SC:'Отправлено в банк',
        sendToTheBank:'Отправлен в банк',

        withdrawTitle: 'Получение выигрыша', 
        generalTitle: 'Просмотр запросов', 
        cancelButtonTitle: 'Отмена',

	});
        
}

return getLangs;
});